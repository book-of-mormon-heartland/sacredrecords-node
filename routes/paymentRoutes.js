import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const paymentRoutes = express.Router();
import { checkIfTokenValid } from "../security/security.js";
import { addPurchase, getUser, updateUser, addPaymentEvent, addPaymentIntent, addToLogs, getUserSubscriptions, getSubscriptions, addSubscriptionsToRemove } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;

const DEV_SK = process.env.DEV_SK;
const STAG_SK = process.env.STAG_SK;
const PROD_SK = process.env.PROD_SK;

//const DEV_PK = process.env.DEV_PK;
//const DEV_QUETZAL_CONDOR_PRICE_ID = process.env.DEV_QUETZAL_CONDOR_PRICE_ID;
//const PROD_PK = process.env.PROD_PK;
//const PROD_QUETZAL_CONDOR_PRICE_ID = process.env.PROD_QUETZAL_CONDOR_PRICE_ID;

let SK = "";
let QUETZAL_CONDOR_PRICE_ID = "";

if(process.env.NODE_ENV && process.env.NODE_ENV==="production") {
  SK =  process.env.PROD_SK;
} else if(process.env.NODE_ENV && process.env.NODE_ENV==="staging") {
  SK =  process.env.STAG_SK;
} else {
  SK =  process.env.DEV_SK;
}


import stripe from 'stripe';
const stripeClient = stripe(SK);

paymentRoutes.post('/intent', async (req, res) => {
  //console.log("In intent");
  //console.log("amt: " + req.body.amount);
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
      return res.status(500).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  //console.log("This is the sk");
  //console.log(SK);
  try {
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    //console.log(paymentIntent);
    return res.json( paymentIntent );
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});

paymentRoutes.post('/setupIntent', async (req, res) => {
  //console.log("In setupIntent");
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
      return res.status(500).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  //console.log("token fine - continuing");
  //console.log("This is the sk");
  //console.log(SK);

  // end security check
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let user = await getUser(userId);
  let userName = user.name;
  let userEmail = user.email;
  //console.log(userEmail);
  let customerId = user?.customerId | "";
  let customer;
  if(customerId=="") {
    const customers = await stripeClient.customers.search({
      query: 'email:\''+ userEmail +'\'',
    });
    
    try {
      if(customers.length>1) {
        customerId = customers.data[0].id;
      } else {
        let customer = await stripeClient.customers.create({
          email: userEmail,
          name: userName,
          metadata: {
              internal_user_id: userId
          }
        });
        customerId = customer.id;
        user.customerId=customerId;
        updateUser(user);
      }
    } catch (e) {
      console.log("error in customer search");
      console.log(e);
      return res.status(400).json({ error: e.message });
    }
  } else {
    // no need to create a customer. it already exists.
  }
  //console.log("customerId: " + customerId);
  
  if(customerId===undefined) {
    return res.status(400).json({ error: "no customer id" });
  }
   // 2. Create the SetupIntent
  //console.log("Going for setup intent");
  try {
    const setupIntent = await stripeClient.setupIntents.create({
      // Required: Link the SetupIntent to a Customer
      customer: customerId,
      
      // Recommended: Indicate how you plan to use the saved payment method.
      // 'off_session' is for recurring or uninitiated payments (e.g., subscription payments).
      // 'on_session' is for future payments where the customer is actively in your app.
      usage: 'off_session', 

      // Optional: Enable a variety of payment methods automatically
      payment_method_types: ['card'],

    });
    //console.log("setupIntent"); 
    //console.log(setupIntent);
    // 3. Send the essential client secret back to your React Native app
    // The client secret is what your React Native app will use to confirm the SetupIntent.
    return res.json({
      message: "success",
      setupIntentClientSecret: setupIntent.client_secret,
      customerId: customerId,
    });

  } catch (error) {
    console.error('Error creating SetupIntent:', error);
    return res.status(400).json({ 
      error: error,
    });
  }
});

paymentRoutes.post('/createSubscription', async (req, res) => {
  try {
    const { payment_method_id } = req.body;
    //console.log("amt: " + req.body.amount);
    //begin security check
    
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized: No token provided or malformed.');
    }
    const jwtToken = authHeader.split(' ')[1];
    if (!checkIfTokenValid(jwtToken, jwtSecret)) {
        return res.status(500).send('Unauthorized: Token is invalid or expired.');
    }
    // end security check

    const decodedPayload = jwt.verify(jwtToken, jwtSecret);
    const userId = decodedPayload.userId;
    let user = await getUser(userId);
    let userEmail = user.email;
    let customerId = user.customerId;
    
    /*
    const customers = await stripeClient.customers.search({
      query: 'email:\''+ userEmail +'\'',
    });
    //console.log("customerSearch");
    //console.log(customers);
    let customerId = customers.data[0].id;
    */

    const productFromSearch = await stripeClient.products.search({
      query: "metadata[\"name\"]:\"quetzal-condor-subscription\""
    });
    //console.log(productFromSearch);
    let productId;
    let priceId;
    try {
      productId = productFromSearch.data[0].id;
      priceId = productFromSearch.data[0].default_price;
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: e.message,
      });
    }

    const paymentMethods = await stripeClient.paymentMethods.list({
      type: 'card',
      limit: 1,
      customer: customerId,
    });

    let paymentMethodId;
    let paymentMethod;
    
    try {
      paymentMethodId = paymentMethods.data[0].id;
      paymentMethod = paymentMethods.data[0];

    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: e.message,
      });
    }
    
    await stripeClient.customers.update(customerId, {
        invoice_settings: {
            default_payment_method: paymentMethodId,
        },
    });

    const subscription = await stripeClient.subscriptions.create({
      customer: customerId,
      items: [{
        price: priceId,
      }],
      // The key change: Use 'off_session' to ensure a PaymentIntent is created
      payment_settings: {
          payment_method_types: ['card'], // Specify types you support
          save_default_payment_method: 'on_subscription', // Save the card for future renewals
      },
      // This will ensure the subscription status is 'incomplete' until paid
      payment_behavior: 'allow_incomplete', 
      // Ensure the invoice and payment intent are returned
      expand: ['latest_invoice.payment_intent'], 
    });

    user.subscriptionId =subscription.id;
    updateUser(user);
    
    return res.json({
      message:"success",
      subscriptionId: subscription.id,
    });
    
  } catch (e) {
    console.log("Error in createSubscription");
    console.log(e);
    return res.status(400).json({
      error: e.message,
    });
  }
});

paymentRoutes.post('/createOrder', async (req, res) => {
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
 const jwtToken = authHeader.split(' ')[1];
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
      return res.status(500).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  try {
    // lets get the token and the user information
    const decodedPayload = jwt.verify(jwtToken, jwtSecret);
    const userId = decodedPayload.userId;
    // add the book to the user
    let user = await getUser(userId);
    let purchases = user.purchases;
    user.purchases.push(req.body.id);
    /*
    Todo:  These to items need to match to the price either needs to match db entry 
    for book or the code and discount price need to match.  
    Otherwise someone is hacking purchases at discounts unauthorized.
    req.body.bookPrice
    req.body.code
    */

    await updateUser(user);
    
    // create a purchases entry
    await addPurchase( userId, user.name, user.email, req.body.id, req.body.bookTitle, req.body.code, req.body.bookPrice);
    return res.json({
      message:"success"
    });
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});

paymentRoutes.post('/getPaymentIntent', async (req, res) => {
  //let price = 2000;
  //console.log("in getPaymentIntent");
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
 const jwtToken = authHeader.split(' ')[1];
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
      return res.status(500).send('Unauthorized: Token is invalid or expired.');
  }
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let user = await getUser(userId);
  let userName = user.name;
  let userEmail = user.email;
  //console.log(userEmail);
  let price = req.body.amount;

  const customers = await stripeClient.customers.search({
    query: 'email:\''+ userEmail +'\'',
  });
  
  let customerId;

  try {
    if(customers.length>1) {
      customerId = customers.data[0].id;
    } else {
      let customer = await stripeClient.customers.create({
        email: userEmail,
        name: userName,
        metadata: {
            internal_user_id: userId
        }
      });
      customerId = customer.id;
    }
  } catch (e) {
    console.log("error in customer search");
    console.log(e);
    return res.status(400).json({ error: e.message });
  }


  const ephemeralKey = await stripeClient.ephemeralKeys.create(
    { customer: customerId },
    { apiVersion: stripeClient.getApiField('version') } // Must match Stripe API version used in client SDK
  );



  const paymentIntent = await stripeClient.paymentIntents.create({
      amount: price,
      currency: 'usd',
      customer: customerId, // <-- IMPORTANT
      automatic_payment_methods: { enabled: true },
    });


  return res.json({
      message: "success",
      customerId: customerId,
      name: userName,
      email: userEmail,
      clientSecret: paymentIntent.client_secret,
      ekSecret: ephemeralKey.secret,
    });

});


/** 
* Used for ios payments.  but appears not no really do anything.  in fact it is not even invoked.
*/
paymentRoutes.get('/paymentCallback', async (req, res) => {
  //console.log("in payment callback");
  //await addToLogs("made it to payment Callback");
  //await addToLogs("about to get the headers string");
  let headersString = "";
   // null, 2 for pretty-printing
  try {
    headersString = JSON.stringify(req.headers, null, 2); // null, 2 for pretty-printing
  } catch (error) {
    headersString = "no headers";
    //await addToLogs(error.message);
  }
  //console.log('Request Headers as String:');
  //console.log(headersString);
  //await addToLogs("next is headerstring");
  //await addToLogs(headersString);
  
  let sig;
  let event;
  try {
    sig = req.headers['stripe-signature'];  
    event = stripe.webhooks.constructEvent(req.body, sig, SK);
    addPaymentEvent(sig, event);
  } catch (err) {
    //console.log(`Webhook error: ${err.message}`);
    addToLogs(err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the payment intent event
  try {
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      addPaymentIntent(sig, paymentIntent);
      //console.log('PaymentIntent was successful!', paymentIntent);
      // Process successful payment (e.g., update your database)
    } else if (event.type === 'payment_intent.failed') {
      const paymentIntent = event.data.object;
      addPaymentIntent(sig, paymentIntent);
      //console.log('PaymentIntent failed.', paymentIntent);
      // Handle failed payment
    }
  } catch (error) {
    addToLogs(error)
  }
  // Return a 200 response to acknowledge receipt of the event
  res.json({ received: true });
});


paymentRoutes.post('/cancelSubscription', async (req, res) => {
  //console.log("in isUserSubscribed");
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
      return res.status(500).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  //console.log(req.body.subscription);
  let subscriptionName = req.body.subscription;  
  //let subscriptionId=req.body.subscriptionId;
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let user = await getUser(userId);
  let userSubscriptions = await getUserSubscriptions(userId);
  //console.log(user);
  //console.log(userSubscriptions);
  let isSubscribed = false;
  if (userSubscriptions.includes(subscriptionName)) {
    //console.log("yes, its true!");
    isSubscribed=true;
  } else {
    //console.log("not a match");
    isSubscribed=false;
  }
  if(isSubscribed) {
    // lets get the subscription id from the subscriptions table.  
    // Then delete the subscription from stripe.
    // Then delete the subscription from the Users table.
    const subscriptions = await getSubscriptions(userId);
    for (let i = 0; i < subscriptions.length; i++) {
      //console.log(subscriptions[i]);
      if(subscriptions[i].product===subscriptionName) {
        let subscriptionId = subscriptions[i].subscriptionId;
        try {
          const cancellation = await stripeClient.subscriptions.cancel(subscriptionId);
          //console.log("Subscription cancellation");
          //console.log(cancellation);

          const billingCycleAnchor=cancellation.billing_cycle_anchor;
          const daysToAdd = 30;
          const subscriptionExpirationDate = billingCycleAnchor + daysToAdd * 86400;
          
          const date = new Date(subscriptionExpirationDate * 1000); // convert seconds → ms
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, add 1
          const day = String(date.getDate()).padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}`;

          const today = new Date(); // convert seconds → ms
          const todayYear = today.getFullYear();
          const todayMonth = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, add 1
          const todayDay = String(today.getDate()).padStart(2, '0');
          const todayFormattedDate = `${todayYear}-${todayMonth}-${todayDay}`;


          // need to calculate the adjustment to when this is supposed to happen.
          let toRemove = {
            userId: userId,
            subscriptionName: subscriptionName,
            cancellationDate: todayFormattedDate,
            formattedEndDate: formattedDate,
            subscriptionExpirationDate: subscriptionExpirationDate
          }
          addSubscriptionsToRemove(toRemove);

          return res.json(
          {
              message: "Subscription good until " + formattedDate,
          });

        } catch (error) {
          return res.json(
          {
              message: "Error Cancelling Subscription",
          });
        }
        
      } // Access element by index
    }
    //db.collection('subscriptions').doc(subscription.time);

  }
  return res.json(
    {
        message: "success",
    })

});


import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const paymentRoutes = express.Router();
import { checkIfTokenValid } from "../security/security.js";
import { getUserPurchases, addPurchase, getUser, updateUser } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;

const DEV_SK = process.env.DEV_SK;
const DEV_PK = process.env.DEV_PK;
const DEV_QUETZAL_CONDOR_PRICE_ID = process.env.DEV_QUETZAL_CONDOR_PRICE_ID;
const PROD_SK = process.env.PROD_SK;
const PROD_PK = process.env.PROD_PK;
const PROD_QUETZAL_CONDOR_PRICE_ID = process.env.PROD_QUETZAL_CONDOR_PRICE_ID;

let SK = "";
let QUETZAL_CONDOR_PRICE_ID = "";

if(process.env.NODE_ENV && process.env.NODE_ENV==="production") {
  SK =  process.env.PROD_SK;
  QUETZAL_CONDOR_PRICE_ID =  process.env.PROD_QUETZAL_CONDOR_PRICE_ID;
} else {
  SK =  process.env.DEV_SK;
  QUETZAL_CONDOR_PRICE_ID =  process.env.DEV_QUETZAL_CONDOR_PRICE_ID;
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
  console.log()
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
  console.log("In setupIntent");
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
  console.log(userEmail);

  const customerSearch = await stripeClient.customers.search({
    query: 'metadata[\'internal_user_id\']:\''+ userId + '\'',
  });
  let customerId = "";
  try {
    if(customerSearch.data.length==0) { 
      console.log("need to create the customer");
      let customer = await stripeClient.customers.create({
        metadata: {
            internal_user_id: userId
        }
      });    
      console.log("customer did not exist - created new one");
      customerId = customer.id; // This is what you need
    } else {
      console.log("customer already exists");
      customerId = customerSearch.data[0].id;
    }
  } catch (e) {
    console.log("error in customer search");
    console.log(e);
    return res.status(400).json({ error: e.message });
  }

   // 2. Create the SetupIntent
    try {
        const setupIntent = await stripeClient.setupIntents.create({
            // Required: Link the SetupIntent to a Customer
            customer: customerId,
            
            // Recommended: Indicate how you plan to use the saved payment method.
            // 'off_session' is for recurring or uninitiated payments (e.g., subscription payments).
            // 'on_session' is for future payments where the customer is actively in your app.
            usage: 'off_session', 

            // Optional: Enable a variety of payment methods automatically
            automatic_payment_methods: {
                enabled: true,
            },
        });

        // 3. Send the essential client secret back to your React Native app
        // The client secret is what your React Native app will use to confirm the SetupIntent.
        res.json({
            message: "success",
            setupIntentClientSecret: setupIntent.client_secret,
            customerId: customerId,
        });

    } catch (error) {
        console.error('Error creating SetupIntent:', error);
        res.status(500).json({ error: error.message });
    }

});

paymentRoutes.post('/createSubscription', async (req, res) => {
  console.log("In Subscription intent");
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

  console.log("token fine - continuing");
  // end security check

  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let user = await getUser(userId);
  let userEmail = user.email;
  console.log(userEmail);
  const priceFromSearch = await stripeClient.prices.search({
    query: 'metadata[\'name\']:\'quetzal-condor-subscription\'',
  });


  console.log("priceFromSearch");
  let priceId = priceFromSearch.data[0].id 
  
  const customerSearch = await stripeClient.customers.search({
    query: 'metadata[\'internal_user_id\']:\''+ userId + '\'',
  });
  let customerId = "";
  if(customerSearch.data.length==0) { 
    console.log("need to create the customer");
    const customer = await stripeClient.customers.create({
      payment_method: payment_method_id,
      email: userEmail,
      invoice_settings: {
        default_payment_method: payment_method_id,
      },
        // Add payment method and other details here
    });
    console.log("customer did not exist - created new one");
    customerId = customer.id; // This is what you need
  } else {
    console.log("customer already exists");
    customerId = customerSearch.data[0].id;
    await stripe.customers.update(customerId, {
        invoice_settings: {
            default_payment_method: payment_method_id,
        },
    });
  }

  await stripeClient.paymentMethods.attach(
      payment_method_id,
      { customer: customerId }
  );

  console.log("priceId: " + priceId );
  console.log("customerId: " + customerId);

  try {
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

      // Check for the payment intent existence (important for robustness)
      //console.log("subscription");
      //console.log(subscription);

      const paymentIntent = subscription.latest_invoice?.payment_intent;
      if (!paymentIntent) {
          throw new Error("Stripe did not return a PaymentIntent. Check your customer and price IDs.");
      }
      
      const clientSecret = paymentIntent.client_secret;
      console.log(clientSecret);
      
      return res.json({
        message:"success",
        clientSecret: clientSecret
      });
      
  } catch (e) {
      console.error(e); // Use console.error for errors
      return res.status(400).json({
        error: e.message,
      });
  }

});

/*
paymentRoutes.post('/createSubscription', async (req, res) => {
    const { customerId, priceId, paymentMethodId } = req.body;

    try {
        // 1. Attach the Payment Method to the Customer (if not already done)
        await stripeClient.paymentMethods.attach(
            paymentMethodId,
            { customer: customerId }
        );

        // 2. Update the Customer's default payment method
        await stripeClient.customers.update(customerId, {
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
        });

        // 3. Create the Subscription
        const subscription = await stripeClient.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }], // The recurring plan/price
            expand: ['latest_invoice.payment_intent'],
            // Use 'default_incomplete' to handle scenarios where the initial payment requires 3D Secure
            payment_behavior: 'default_incomplete',
        });

        const latestInvoice = subscription.latest_invoice;
        const paymentIntent = latestInvoice.payment_intent;

        // 4. Send back the necessary details to the client
        res.json({
            subscriptionId: subscription.id,
            clientSecret: paymentIntent.client_secret,
            status: subscription.status,
        });

    } catch (error) {
        console.error('Error creating subscription:', error);
        res.status(500).json({ error: error.message });
    }
});
*/
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

/*
paymentRoutes.post('/applyDiscount', async (req, res) => {
  console.log("In Apply Discount");
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkToken(jwtToken)) {
      return res.status(401).send('Unauthorized: Token is invalid or expired.');
  }
  // end security check
  console.log(req);
  try {
    console.log("Passed the security check");
    console.log("Ready to create order data");
    return res.json({
      message:"success"
    } );
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});
*/

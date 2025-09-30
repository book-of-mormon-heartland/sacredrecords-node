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
  console.log("token fine - continuing");
  // end security check
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let user = await getUser(userId);
  let userEmail = user.email;
  console.log(userEmail);

  const customers = await stripeClient.customers.search({
    query: 'email:\''+ userEmail +'\'',
  });
  console.log("customerSearch");
  console.log(customers);
  let customerId = customers.data[0].id;
  console.log("customerId: " + customerId);
  try {
    
    if(customers.data[0].id.length==0) { 
      console.log("need to create the customer");
      let customer = await stripeClient.customers.create({
        email: userEmail,
        name: user.name,
        metadata: {
            internal_user_id: userId
        }
      });    
      console.log("customer did not exist - created new one");
      customerId = customer.id; // This is what you need
    } else {
      console.log("customer already exists");
    }
  } catch (e) {
    console.log("error in customer search");
    console.log(e);
    return res.status(400).json({ error: e.message });
  }
  console.log("customerId: " + customerId);
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
    console.log("setupIntent"); 
    console.log(setupIntent);
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

    const customers = await stripeClient.customers.search({
      query: 'email:\''+ userEmail +'\'',
    });
    console.log("customerSearch");
    console.log(customers);
    let customerId = customers.data[0].id;

    const productFromSearch = await stripeClient.products.search({
      query: "metadata[\"name\"]:\"quetzal-condor-subscription\""
    });
    console.log(productFromSearch);
    let productId = productFromSearch.data[0].id;
    let priceId = productFromSearch.data[0].default_price;

    const paymentMethods = await stripeClient.paymentMethods.list({
      type: 'card',
      limit: 1,
      customer: customerId,
    });

    const paymentMethodId = paymentMethods.data[0].id;
    const paymentMethod = paymentMethods.data[0];
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

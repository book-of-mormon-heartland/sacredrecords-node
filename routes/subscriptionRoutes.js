import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const subscriptionRoutes = express.Router();
import { checkIfTokenValid } from "../security/security.js";
import { db, getUserSubscriptions, addOrUpdateUser, getUser, getSubscriptionPrice, addSubscription, addAppleSubscription } from "../database/database.js"; // Import the database module
import fetch from 'node-fetch';


const jwtSecret = process.env.JWT_SECRET;


subscriptionRoutes.get('/getSubscriptions', async (req, res) => {
  //console.log("in getSubscriptions")
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
  let userSubscriptions = await getUserSubscriptions(userId);

  return res.json(
    JSON.stringify({
        "message": "success",
        "subscriptions": userSubscriptions
    }))
});

subscriptionRoutes.post('/subscribe', async (req, res) => {
  //console.log("in subscribe")
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
  let userSubscriptions = await getUserSubscriptions(userId);

  return res.json(
    JSON.stringify({
        "message": "success",
        "subscriptions": userSubscriptions
    }))
});

subscriptionRoutes.post('/checkIfSubscribed', async (req, res) => {
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
  let subscriptionName = req.body.subscription;
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let userSubscriptions = await getUserSubscriptions(userId);
  let isSubscribed = false;
  if (userSubscriptions.includes(subscriptionName)) {
    isSubscribed=true;
  } else {
    isSubscribed=false;
  }

  return res.json(
    JSON.stringify({
        message: "success",
        isSubscribed: isSubscribed
    }))
});

subscriptionRoutes.post('/finalizePurchase', async (req, res) => {
  //console.log("in finalizePurchase");
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
  let subscriptionName = req.body.subscription;  
  let subscriptionId=req.body.subscriptionId;
  const decodedPayload = jwt.verify(jwtToken, jwtSecret);
  const userId = decodedPayload.userId;
  let user = await getUser(userId);
  let userSubscriptions = await getUserSubscriptions(userId);
  let isSubscribed = false;
  if (userSubscriptions.includes(subscriptionName)) {
    isSubscribed=true;
  } else {
    // we should not be subscribed at this point.  We need to add the subscription to the person.
    isSubscribed=false;
    userSubscriptions.push(subscriptionName);
    user.subscriptions=userSubscriptions;
    await addOrUpdateUser(user);
    //console.log("Subscription should have been added now.");
    //create the subscription in the Subscriptions table.
    isSubscribed=true;
    let monthlyPrice = await getSubscriptionPrice('quetzal-condor')
    await addSubscription( userId, user.name, user.email, subscriptionName, subscriptionId, monthlyPrice);
    //console.log("Need to make the db entry for the subscription")
  }
  

  return res.json(
    JSON.stringify({
        message: "success",
        isSubscribed: isSubscribed
    }))
});


subscriptionRoutes.post('/isUserSubscribed', async (req, res) => {
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
  //console.log("isSubscribed value");
  //console.log(isSubscribed);

  return res.json(
    {
        message: "success",
        isSubscribed: isSubscribed
    })
});


subscriptionRoutes.post('/appleVerifySubscription', async (req, res) => {
  console.log("appleVerifySubscription");
  const subscriptionName = "quetzal-condor";
  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }
  const jwtToken = authHeader.split(' ')[1];
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
      return res.status(500).send('Unauthorized: Token is invalid or expired.');
  }

  const { receipt } = req.body;
  console.log("receipt");
  console.log(receipt);

  if (!receipt) return res.status(400).send('Missing receipt');

  try {
    const result = await verifyAppleReceipt(receipt);
    if (result.status === 0) {
      // valid receipt
      const latestReceiptInfo = result.latest_receipt_info?.[0];

      const decodedPayload = jwt.verify(jwtToken, jwtSecret);
      const userId = decodedPayload.userId;
      let user = await getUser(userId);
      let userSubscriptions = await getUserSubscriptions(userId);
      let isSubscribed = false;
      if (userSubscriptions.includes(subscriptionName)) {
        isSubscribed=true;
        return res.json({ message: "Already Subscribed" });
      } else {
        // we should not be subscribed at this point.  We need to add the subscription to the person.
        isSubscribed=false;
        userSubscriptions.push(subscriptionName);
        user.subscriptions=userSubscriptions;
        await addOrUpdateUser(user);
        //console.log("Subscription should have been added now.");
        //create the subscription in the Subscriptions table.
        isSubscribed=true;
//        let monthlyPrice = await getSubscriptionPrice('quetzal-condor')
        let monthlyPrice = "9.99";
        await addAppleSubscription( userId, user.name, user.email, subscriptionName, "receiptValue", monthlyPrice);
        console.log("Need to make the db entry for the subscription")
        return res.json({ message: "success" });

      }
    } else {
      return res.status(400).json({ message: "Not Successfully Saved. Invalid receipt" });
    }
  } catch (err) {
    console.error('Verification failed', err);
    res.status(500).send('Internal error');
  }
});

const verifyAppleReceipt = async(receiptData) => {
  const body = {
    'receipt-data': receiptData,
    'password': process.env.APPLE_SHARED_SECRET, // from App Store Connect
    'exclude-old-transactions': true,
  };

  // Try production first, then sandbox fallback
  let response = await fetch(process.env.APPLE_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  let json = await response.json();

  return json;
}

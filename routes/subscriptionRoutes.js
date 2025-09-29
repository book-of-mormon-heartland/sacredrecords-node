import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const subscriptionRoutes = express.Router();
import { checkIfTokenValid } from "../security/security.js";
import { db, getUserSubscriptions, addOrUpdateUser, getUser } from "../database/database.js"; // Import the database module

const jwtSecret = process.env.JWT_SECRET;


subscriptionRoutes.get('/getSubscriptions', async (req, res) => {
  console.log("in getSubscriptions")
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
  console.log("in subscribe")
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
  console.log("in checkIfSubscribed");
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
  console.log("in finalizePurchase");
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
  console.log(subscriptionName);
  
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
    console.log("Subscription should have been added now.");
    //create the subscription in the Subscriptions table.
    isSubscribed=true;
    console.log("Need to make the db entry for the subscription")
  }
  

  return res.json(
    JSON.stringify({
        message: "success",
        isSubscribed: isSubscribed
    }))
});

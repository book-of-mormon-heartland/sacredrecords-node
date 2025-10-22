import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
import { OAuth2Client } from 'google-auth-library';
import { checkTokenUserMatch, checkIfTokenValid } from "../security/security.js";
import { getSubscriptions, getPurchases, getUser, addOrUpdateUser, updatePurchase, updateSubscription, removeUser, removePurchase, removeSubscription } from "../database/database.js"; // Import the database module

export const profileRoutes = express.Router();

const GOOGLE_WEB_CLIENT_ID  = process.env.GOOGLE_WEB_CLIENT_ID;
const GOOGLE_ANDROID_CLIENT_ID = process.env.GOOGLE_ANDROID_CLIENT_ID;
const GOOGLE_IOS_CLIENT_ID = process.env.GOOGLE_IOS_CLIENT_ID;
const jwtSecret = process.env.JWT_SECRET;



profileRoutes.get('/deleteAccount', async (req, res) => {
  console.log("Delete Account");
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
  const userId=decodedPayload.userId;

  const user = await getUser(userId);

  let purchases = await getPurchases(userId);
  for (let i = 0; i < purchases.length; i++) {
    console.log(purchases[i]);
    let purchase = purchases[i];
    removePurchase(purchase);
  }

  let subscriptions = await getSubscriptions(userId);
  for (let i = 0; i < subscriptions.length; i++) {
    let subscription = subscriptions[i];
    removeSubscription(subscription);
  }
  removeUser(user);

  let messageToReturn = {
    message: "success"
  };
  return res.json(messageToReturn);
});


profileRoutes.get('/deletePersonalData', async (req, res) => {
  console.log("deletePersonalData");
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
  const userId=decodedPayload.userId;

  const user = await getUser(userId);
  user.givenName="";
  user.familyName="";
  user.name="";
  user.email="";
  await addOrUpdateUser(user);
  // get purchases and delete the personal information in there.
  let purchases = await getPurchases(userId);
  for (let i = 0; i < purchases.length; i++) {
    console.log(purchases[i]);
    let purchase = purchases[i];
    purchase.name="deleted";
    purchase.email="deleted";
    updatePurchase(purchase);
  }

  let subscriptions = await getSubscriptions(userId);
  for (let i = 0; i < subscriptions.length; i++) {
    let subscription = subscriptions[i];
    subscription.name="deleted";
    subscription.email="deleted";
    updateSubscription(subscription);
  }

  let messageToReturn = {
    message: "success"
  };
  return res.json(messageToReturn);
});

profileRoutes.get('/getUserName', async (req, res) => {
  //console.log("getBookmarks called")
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
  const userId=decodedPayload.userId;
  const user = await getUser(userId);
  //console.log("this is the userid");
  //console.log(userId);
  let messageToReturn = {
    message: "success",
    givenName: user.givenName,
    familyName: user.familyName,
    name: user.name,
  };
  return res.json(messageToReturn);
});


profileRoutes.post('/saveUserName', async (req, res) => {
  //console.log("saveUserName");
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
  const userId=decodedPayload.userId;
  //console.log("this is the userid for which we will save data");
  //console.log(userId);
  //console.log(req);
  const user = await getUser(userId);
  const givenName = req.body.givenName;
  const familyName = req.body.familyName;
  const name = req.body.name;
  user.givenName=givenName;
  user.familyName=familyName;
  user.name=name;
  await addOrUpdateUser(user);
  let messageToReturn = {
    message: "success"
  };
  return res.json(messageToReturn);


});

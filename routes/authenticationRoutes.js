import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
import { OAuth2Client } from 'google-auth-library';
import { checkTokenUserMatch, checkIfTokenValid } from "../security/security.js";
import { getUser, addOrUpdateUser, getUserLanguage } from "../database/database.js"; // Import the database module

export const authenticationRoutes = express.Router();

const GOOGLE_WEB_CLIENT_ID  = process.env.GOOGLE_WEB_CLIENT_ID;
const GOOGLE_ANDROID_CLIENT_ID = process.env.GOOGLE_ANDROID_CLIENT_ID;
const GOOGLE_IOS_CLIENT_ID = process.env.GOOGLE_IOS_CLIENT_ID;
const jwtSecret = process.env.JWT_SECRET;


authenticationRoutes.get('/googleLogin', (req, res) => {
  //console.log("Google Login Here");
  return res.json({
        message: "Hack Job",
      });
});

authenticationRoutes.post('/googleLogin', async(req, res) => {
  //console.log("Google Login Here from post");
  // retrieve the token
  const token = req.body.token;
  const user = req.body.user;
  //console.log(token);
  //console.log(user);
  // validate the token with google.
  const client = new OAuth2Client(GOOGLE_WEB_CLIENT_ID);
  //console.log(client);
  const verify = async () => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [ GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID ], 
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    //console.log(userid);

    if (payload.sub !== user.id) {
      return res.json(
        JSON.stringify({
          "message": "Error: Token user ID does not match provided user ID",
          "jwtToken": "",
          "refreshToken": "",
        }));
    }
    // Add or update the user.  Same thing here.
    //user.purchases=user.purchases || ['gospel-of-nicodemus-en', 'the-nephite-record-en', 'the-sacred-tree-en']
    const userFromDatabase = await getUser(userid);
    if(userFromDatabase?.id) {
      //console.log("user is in the database - skip the rest");

    } else {
      // todo should be poplulated by the user OS.
      let language = "en";
      user.language=language;
      let purchases = ["the-sacred-tree-en"];
      user.purchases = purchases;
      let subscriptions = [];
      user.subscriptions = subscriptions;
      await addOrUpdateUser(user);
    }
    let languageToReturn = await getUserLanguage(user.id);

    //console.log(purchases);
    // generate the jwt token.
    let jwtToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    let refreshToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '7d' });
    //no need to store in database.
    //addToken(user.id, jwtToken);
    return res.json(
    JSON.stringify({
        "message": "Success",
        "language": languageToReturn,
        "jwtToken": jwtToken,
        "refreshToken": refreshToken,
    }))

  }
  verify().catch((error) => {
    //console.log('Error verifying token:', error);
    return res.json(
      JSON.stringify({
        "message": error,
        "jwtToken": "",
        "refreshToken": "",
      })
    );
  });
});


const APPLE_KEYS_URL = 'https://appleid.apple.com/auth/keys';
let cachedAppleKeys = null;

// Fetch and cache Apple's public keys
const  getAppleKeys = async ()  => {
  if (cachedAppleKeys) return cachedAppleKeys;

  const response = await fetch(APPLE_KEYS_URL);
  if (!response.ok) {
    throw new Error(`Unable to fetch Apple public keys: ${response.statusText}`);
  }

  const { keys } = await response.json();
  cachedAppleKeys = keys;
  return keys;
}

// Find the right key for the JWT header.kid
const  getAppleKeyByKid = async (keys, kid) => {
  return keys.find(key => key.kid === kid);
}

// Verify Apple ID token (JWT)
const  verifyAppleToken = async(idToken, clientId) => {
  try {
    const decodedHeader = jwt.decode(idToken, { complete: true });
    if (!decodedHeader) throw new Error('Invalid token');

    const appleKeys = await getAppleKeys();
    const appleKey = await getAppleKeyByKid(appleKeys, decodedHeader.header.kid);
    //console.log("This is the appleKey");
    //console.log(appleKey);
    if (!appleKey) throw new Error('Apple public key not found for token');

    const pem = jwkToPem(appleKey);

    const verifiedToken = jwt.verify(idToken, pem, {
      algorithms: ['RS256'],
      issuer: 'https://appleid.apple.com',
      audience: clientId, // should match your app's "Service ID" or bundle ID
    });

    // verifiedToken now contains claims like sub, email, etc.
    return verifiedToken;
  } catch (err) {
    console.error('Apple token verification failed:', err.message);
    throw err;
  }
}


authenticationRoutes.post('/appleLogin', async (req, res) => {
  //console.log("Google Login Here from post");
  // retrieve the token
  //console.log("appleLogin");
  const familyName = req.body.familyName;
  const givenName = req.body.givenName;
  const name = familyName + " " + givenName;

  const appleUserId = req.body.user;
  const idToken = req.body.idToken;
  const authorizationCode = req.body.authorizationCode;
  const nonce = req.body.nonce;


  let appleToken = await verifyAppleToken(idToken, "com.sacredrecords");
  //console.log("appleToken");
  //console.log(appleToken);
  try {
    let userId = appleToken.sub;
    let email = appleToken.email;
    // create the user object based on Google object.
    // get the user object from the database.  If it does not exist, we create it.  if it does, we modify it.
    let user = await getUser(userId);
    let jwtToken = jwt.sign({ userId: userId }, jwtSecret, { expiresIn: '1h' });
    let refreshToken = jwt.sign({ userId: userId }, jwtSecret, { expiresIn: '7d' });
    //console.log("user from apple login");
    //console.log(user);
    if (user) {
      //console.log("User Exists returning with update profile");
      // user exists.  return tokens.
      // "message": "updateProfile", if the user information is blank;
      if(user.familyName=="" || user.givenName=="") {
        let message = {
            message: "updateProfile",
            language: user.language,
            user: user,
            jwtToken: jwtToken,
            refreshToken: refreshToken,
        }
        return res.json(message);
        
      } else {
        //console.log("User Exists returning success");

        let message = {
          message: "success",
          language: user.language,
          user: user,
          jwtToken: jwtToken,
          refreshToken: refreshToken,
        }
        return res.json(message);
      }

    } else {
      //console.log("User is not in the database.  We now can create it.");
      user = {
        email: email,
        familyName: "",
        givenName: "",
        id: userId,
        language: "en",
        name: "",
        photo: "",
        purchases: [ "the-sacred-tree-en" ],
        subscriptions: []
      }
      await addOrUpdateUser(user);
      let message={
          message: "updateProfile",
          language: "en",
          user: user,
          jwtToken: jwtToken,
          refreshToken: refreshToken,
      }
      return res.json(message);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send('ERROR on apple login.');
  }
});

authenticationRoutes.post('/refreshJwtToken', (req, res) => {

  //begin security check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized: No token provided or malformed.');
  }

  const jwtToken = authHeader.split(' ')[1];
  //console.log("This is the jwtToken");
  //console.log(jwtToken);
  //console.log("is token valid? " + checkIfTokenValid(jwtToken, jwtSecret));
  if (!checkIfTokenValid(jwtToken, jwtSecret)) {
    //console.log("Token Expired");
    // The token is expired.  Lets check if the authToken is expired.
    let refreshToken = req.body.refreshToken;
    let userId = req.body.userId;
    //console.log("This is the refreshToken");
    //console.log(refreshToken);
    if(!checkIfTokenValid(refreshToken, jwtSecret)) {
      // if expired return an error message.
      //console.log("expired");
      return res.status(500).send('Unauthorized: RefreshToken is expired.');
    } else {
      const isMatch = checkTokenUserMatch(refreshToken, userId);
      //console.log("this is isMatch");
      //console.log(isMatch);
      if(isMatch) {
        //console.log("Create the new one now.");
        //console.log("userId " + userId);
        //console.log("jwtSecret " + jwtSecret);
        let newJwtToken = jwt.sign({ userId: userId }, jwtSecret, { expiresIn: '1h' });
        //console.log("oldJwtToken:" + jwtToken);
        //console.log("newJwtToken:" + newJwtToken);
        return res.json(
            JSON.stringify({
                "message": "update-jwt-token",
                "jwtToken": newJwtToken,
            }));
      }
    }
  }
  else {
    return res.json(
      JSON.stringify({
        "message": "valid-token",
      }));
  }
});


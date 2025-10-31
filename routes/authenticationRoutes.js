import express from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
import { OAuth2Client } from 'google-auth-library';
import { checkTokenUserMatch, checkIfTokenValid } from "../security/security.js";
import { getUser, addOrUpdateUser, getUserLanguage, getUserByUsername } from "../database/database.js"; // Import the database module
import jwksClient from 'jwks-rsa';
import { CognitoIdentityProviderClient, SignUpCommand, ConfirmSignUpCommand  } from "@aws-sdk/client-cognito-identity-provider";
import { verify } from 'crypto';


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
      user.loginSource="google";

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
  const name = req.body.fullName;

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
        loginSource: "apple",
        familyName: familyName || "",
        givenName: givenName || "",
        id: userId,
        language: "en",
        name: name || "",
        photo: "",
        purchases: [ "the-sacred-tree-en" ],
        subscriptions: [ "quetzal-condor" ]
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

const client = jwksClient({
  jwksUri: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_Gu5AvTv9i/.well-known/jwks.json'
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) return callback(err);
    
    // Support both v2 and v3+ of jwks-rsa
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

export const verifyCognitoToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, {
      algorithms: ['RS256'],
      issuer: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_Gu5AvTv9i',
    }, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};

// nov 15 baby shower
authenticationRoutes.post('/cognitoLogin', async(req, res) => {
  //console.log("Cognito Login Here from post");
  // retrieve the token
  const token = req.body.token;
  // validate the token with cognito.
  verifyCognitoToken(token)
    .then(async (decoded) => {
      //console.log("Token is valid:", decoded);
      // Token is valid, proceed with your logic here
      // get user by email.  If not found create user.
      //console.log("decoded.sub");
      //console.log(decoded.sub);
      let user = await getUser(decoded.sub);
      //console.log(user);

      let jwtToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
      let refreshToken = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '7d' });


      return res.json(
        JSON.stringify({
          "message": "Cognito Token is valid.",
          "user": user,
          "jwtToken": jwtToken,
          "refreshToken": refreshToken,
        }));
    })
    .catch((err) => {
      console.error("Token verification failed:", err);
      // Token is invalid, handle the error here
      return res.json(
        JSON.stringify({
          "message": "Error: Invalid Cognito Token.",
          "jwtToken": "",
          "refreshToken": "",
        }));
    });
});

const cognito = new CognitoIdentityProviderClient({ region: "us-east-2" });

authenticationRoutes.post('/cognitoCreateAccount', async(req, res) => {
  //console.log("Cognito Create Account");
  // retrieve the token
  const { username, givenName, familyName, fullName, email, password } = req.body;

  // Here you would typically call your backend or Cognito service to create the account
  // For example:
  try {
    const params = {
        ClientId: "6hfre57q3l5b6si19k6d0rt7ej", // from Cognito User Pool App Client (not the pool ID)
        Username: username,
        Password: password,
        UserAttributes: [
          { Name: "email", Value: email },
          { Name: "given_name", Value: givenName },
          { Name: "family_name", Value: familyName },
          { Name: "name", Value: fullName },
        ],
      };

    const command = new SignUpCommand(params);
    const response = await cognito.send(command);
    
    let user = {
      id: response.UserSub,
      accountSource: "cognito",
      verified: false,
      email: email,
      familyName: familyName || "",
      givenName: givenName || "",
      name: fullName || "",
      username: username,
      photo: "",
      language: "en",
      purchases: [ "the-sacred-tree-en" ],
      subscriptions: []
    }
    await addOrUpdateUser(user);

    return res.json({
      message: "Success",
    });

  } catch (err) {
    return res.json({
      message: err.message
    });

  }
});


authenticationRoutes.post('/cognitoVerifyAccount', async(req, res) => {
  //console.log("Cognito Verify Account");
  // retrieve the token
  const { username, verificationCode } = req.body;
  //console.log("username: " + username);
  //console.log("verificationCode: " + verificationCode); 

  // Here you would typically call your backend or Cognito service to create the account
  // For example:
  const params = {
      ClientId: "6hfre57q3l5b6si19k6d0rt7ej", // from Cognito User Pool App Client (not the pool ID)
      Username: username,
      ConfirmationCode: verificationCode,
  };

  try {
    const command = new ConfirmSignUpCommand(params);
    const response = await cognito.send(command);
    let user = await getUserByUsername(username);
    user.verified = true;
    await addOrUpdateUser(user);
    return res.json({
      message: "success",
    });
  } catch (err) {
    return res.json({
      message: err.message,
    });
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


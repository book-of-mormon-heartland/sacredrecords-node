import express from 'express';
const app = express();
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const port = 8080;

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
// no cors in mobile apps.

// Serve static files from the 'public' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// for rest api to use json.
app.use(express.json());

    // Optional: Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


import { authenticationRoutes } from './routes/authenticationRoutes.js';
app.use('/authentication', authenticationRoutes);

import { utilityRoutes } from './routes/utilityRoutes.js';
app.use('/utilities', utilityRoutes);

import { profileRoutes } from "./routes/profileRoutes.js";
app.use("/profiles", profileRoutes);

import { paymentRoutes } from './routes/paymentRoutes.js';
app.use('/payments', paymentRoutes);

import { bookmarkRoutes } from "./routes/bookmarkRoutes.js";
app.use("/bookmarks", bookmarkRoutes);

import { subscriptionRoutes } from "./routes/subscriptionRoutes.js";
app.use("/subscriptions", subscriptionRoutes);

import { bookRoutes } from "./routes/bookRoutes.js";
app.use("/books", bookRoutes);

import { chapterRoutes } from "./routes/chapterRoutes.js";
app.use("/chapters", chapterRoutes);

import { router } from './routes/rest.js';
app.use("/rest", router);

import { handsomeLake } from "./routes/handsomelake.js";
app.use("/handsomeLake", handsomeLake);

import { yahawzhowaa } from "./routes/yahawzhowaaBook9.js";
app.use("/yahawzhowaa", yahawzhowaa);

//import { theSacredTree } from "./routes/thesacredtree.js";
//app.use("/thesacredtree", theSacredTree);
//import { copper } from "./routes/thecopperrecord.js";
//app.use("/copper", copper);
//import { nicodemus } from "./routes/nicodemus.js";
//app.use("/nicodemus", nicodemus);
//const nephiteRecord = require("./routes/nephiterecord.js");
//app.use("/nephiterecord", nephiteRecord);
//const newtestament = require("./routes/newtestament.js");
//app.use("/newtestament", newtestament);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

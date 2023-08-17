
// Mass Academy API Club 2023 //
// By: Tarun Eswar & Omar El Nesr //

// Term: C Term
// Description: Creating the API for the Mass Academy Brickyard Beat Newspaper

// Schedule
// Week 1: Learn about databases and decide on the best design
// Week 2: Learn about Firebase implement OAuth, JSON Web Tokens, cover imports
// Week 3: Learn about get requests, brainstorm implement them
// Week 4: Continuation of week 3
// Week 5: Learn about post requests, brainstorm, implement them
// Week 6: Continuation of week 5
// Week 7: Documenetation on Postman and why it's useful
// Week 8: Hosting our API on a server


// ----- BOILER TEMPLATE ----- //

// IMPORTS //

// Creating an express server
const express = require('express')
const app = express()

// Cross origin resource sharing enabled
const cors = require('cors');
app.use(cors());

// Running on port 8080
const port = 8080

// Body parser for JSON enabled
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// NPM imports
var mysql = require('mysql');
var admin = require("firebase-admin");

// INITIATE DATABASE CONNECTION //
var con = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
  port: ""
});

// INITIATE FIREBASE CONNECTION //
try {
  admin.initializeApp({
  });
}
catch {
  console.log("Firebase already initialized")
}

// JWT CHECK //
async function appCheckVerification(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401);
        return next('Unauthorized');
    }
    try {
        const appCheckClaims = await admin.auth().verifyIdToken(token);
        return next("");
    } catch (err) {
        console.log(err)
        res.status(401);
        return next('Unauthorized');
    }
  }
 

// BASE ENDPOINT //
app.get('/', (req, res) => {
  res.send('Test Server Activated')
});


// GET REQUESTS //

// sample get request
app.get("/get", [appCheckVerification], (req, res) => {
    try {
  } catch(err) {
    console.log(err)
  }
});


// POST REQUESTS //

// sample post request
app.post("/post", [appCheckVerification], async (req, res) => {
    try {
    } catch(err) {
      console.log(err)
    }
});


// LISTENING ON PORT //

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



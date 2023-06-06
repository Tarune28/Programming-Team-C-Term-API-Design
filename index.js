
// API Club @2023 //
// By: Tarun Eswar & Omar El Nesr //


// IMPORTS --------------------------------------------------------------- //

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


// INITIATE DATABASE CONNECTION --------------------------------------------------------------- //

var con = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
  port: ""
});


// INITIATE FIREBASE CONNECTION --------------------------------------------------------------- //
try {
  admin.initializeApp({
  });
}
catch {
  console.log("Firebase already initialized")
}


// JWT CHECK --------------------------------------------------------------- //

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
app.post("/manualEntry", [appCheckVerification], async (req, res) => {
    try {
    } catch(err) {
      console.log(err)
    }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



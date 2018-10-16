///REQUIRE///

var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


//SCRAPING TOOLS//

var axios = require("axios");
var cheerio = require("cheerio");


//REQUIRE MODELS//

var db = require("./models");
var PORT = 3000;


// INITIALIZE EXPRESS //

var app = express();


//CONFIGURE MIDDLEWARE//

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


//CONNECT TO MONGO DB//

mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

//ROUTES//

//A GET route for scraping the NYTimes website

//First grab the body of the html with axios

//Then, load into cheerio and save it to $ (shorthand for selector)


//Grab every h2 within article tag

//save empty result


//Add text and href of every link, save as properties of the result object


//Create a new Article using the 'result' object built from scraping

//View added result in the console


//If error occured send to client



//Route for grabbing specific article by id, populate it with it's note


//Using the id passed in the id parameter, prepare a query that finds the matching one in the db


//populate all notes associated with it

//If we were able to successfully find an Article with the given id, send it back to the client


//If an error occured, send it to the client


//Route for saving/updating Article's associated Note

//Create a new note and pass the req.body to the entry


//if a Note was created successfully, find.... 

//If we were able to successfully update an Article, send it back to the client


//If an error occured, send it to the client


//start the server


















// NEED TO INCORPORATE THE FOLLOWING SOMEHOW

import { on } from "cluster";

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


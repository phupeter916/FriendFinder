var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Express app using body-parser app to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//api routes
require('./app/routing/apiRoutes.js')(app);
//html routes
require('./app/routing/htmlRoutes.js')(app);

// initiates the server 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
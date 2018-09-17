var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();


var PORT = process.env.PORT || 8080;

// Express app using body-parser 
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

// initiates listending for the server 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
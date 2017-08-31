
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

mongoose = require('mongoose'),
Message = require('./api/models/message'), //created model loading here
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ejemplo_mean'); 


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var hello_routes = require('./api/routes/hola_routes.js') 
hello_routes(app); //register the route

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


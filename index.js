
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var hello_routes = require('./hola_routes.js') 
hello_routes(app); //register the route

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


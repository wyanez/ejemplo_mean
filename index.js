
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var hello = require('./hola_controller.js')

app.get('/', function (req, res) {
  res.json({message : 'Hello World!'})
});

app.get('/hello', function (req, res) {
  var msg = hello.get_message(req,'GET')
  res.json({ message: msg })
});

app.post('/hello', function (req, res) {
    console.log("Recibiendo peticion POST /hello")
    var msg = hello.get_message(req,'POST')
    res.json({ message: msg })
});


app.put('/hello', function (req, res) {
    console.log("Recibiendo peticion PUT /hello")
    var msg = hello.get_message(req,'PUT')
    res.json({ message: msg })
});


app.get('/about', function (req, res) {
    res.json({ message: 'About: Hello World!'})
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


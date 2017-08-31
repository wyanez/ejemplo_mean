
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  var name = getName(req);
  res.send('GET: Hello World '+ name + ' !' );
});

app.post('/hello', function (req, res) {
  console.log("Recibiendo peticion POST /hello")

  var name = getName(req);
  res.send('POST: Hello World '+ name + ' !' );
  
});


app.put('/hello', function (req, res) {
  console.log("Recibiendo peticion PUT /hello")

  var name = getName(req);
  res.json({ message: 'Hello World '+ name + ' !' });     
});


app.get('/about', function (req, res) {
  res.send('About: Hello World!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function getName(req) {
    var name = "" 
    if (req.method == 'POST' || req.method == 'PUT'){
        if (req.body.name !== undefined) name = req.body.name
    }
    else{
        if ( req.query.name !== undefined) name = req.query.name         
    }

    return name;
}
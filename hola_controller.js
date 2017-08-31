"use strict";

exports.index = function (req, res) {
  res.json({message : 'Hello World!'})
}

exports.hello_get = function (req, res) {
      var msg = get_message(req,'GET')
      res.json({ message: msg })
}

exports.hello_post = function (req, res) {
    console.log("Recibiendo peticion POST /hello")
    var msg = get_message(req,'POST')
    res.json({ message: msg })
}

exports.hello_put =  function (req, res) {
    console.log("Recibiendo peticion PUT /hello")
    var msg = get_message(req,'PUT')
    res.json({ message: msg })
}

exports.about = function (req, res) {
    res.json({ message: 'About: Hello World!'})
}

function get_message(request,method){
    var name = getName(request)
    var message = method + ': Hello World '+ name + ' !'
    return message
};

function getName(req) {
    var name = ""
    if (req.method == 'POST' || req.method == 'PUT'){
        if (req.body.name !== undefined) name = req.body.name
    }
    else{ //GET o DELETE
        if ( req.query.name !== undefined) name = req.query.name         
    }
    return name;
}
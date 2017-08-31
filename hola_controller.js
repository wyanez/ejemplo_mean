"use strict";

var mongoose = require('mongoose'), 
    Message = mongoose.model('Message');

exports.hello_all = function (req, res) {
    Message.find({}, function(err, messages) {
        if (err) res.json(err);
        res.json({messages});
     });
}

exports.hello_get = function (req, res) {
    Message.findById(req.params.messageId, function(err, msg) {
        if (err) res.send(err);
        res.json(msg);
    });
}

exports.hello_create = function (req, res) {
    console.log("Recibiendo peticion POST /hello")
    
    var new_message = new Message(req.body);
    new_message.save(function(err, message) {
        if (err) res.send(err);
        res.json(message);
    });
}

exports.hello_update =  function (req, res) {
    console.log("Recibiendo peticion PUT /hello")
    Message.findOneAndUpdate({_id: req.params.messageId}, req.body, {new: true}, 
        function(err, msg) {
            if (err) res.json(err);
            res.json(msg);
        });
}

exports.hello_delete =  function (req, res) {
    console.log("Recibiendo peticion DELETE /hello")
    Message.remove({
        _id: req.params.messageId
      }, function(err, task) {
        if (err) res.json(err);
        res.json({ message: 'Message successfully deleted' });
      });
}

exports.about = function (req, res) {
    res.json({ message: 'About: Hello World MEAN Example App!'})
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
"use strict";

exports.get_message = function (request,method){
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
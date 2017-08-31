'use strict';
module.exports = function(app) {

    var hello = require('./hola_controller.js')

    app.get('/', hello.index);

    app.get('/hello',hello.hello_get);

    app.post('/hello',hello.hello_post);

    app.put('/hello',hello.hello_put);

    app.get('/about', hello.about);

};
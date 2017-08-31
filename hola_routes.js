'use strict';
module.exports = function(app) {

    var hello = require('./hola_controller.js')

    app.route('/hello')
    .get(hello.hello_all)
    .post(hello.hello_create)

    app.route('/hello/:messageId')
    .get(hello.hello_get)
    .put(hello.hello_update)
    .delete(hello.hello_delete)

    app.get('/about', hello.about);

};
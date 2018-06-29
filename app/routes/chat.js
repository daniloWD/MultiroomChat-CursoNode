module.exports = function(app) {

    app.route('/chat')

    .get(function(req, res) {
        app.app.controllers.chat.iniciaChat(app, req, res);
    })

    .post(function(req, res) {
        app.app.controllers.chat.iniciaChat(app, req, res);
    })
};
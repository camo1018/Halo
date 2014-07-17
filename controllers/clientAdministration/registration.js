module.exports = function(app, modules) {
    var section = '/clientAdministration/';

    app.get(section + 'registration', function(req, res) {
        res.render('clientAdministration/registration.html');
    });

    /* API */
    app.post('/actions' + section + 'register', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var passwordConfirm = req.body.passwordConfirm;
    });
}
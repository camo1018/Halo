/**
 * Created by Paul on 7/15/2014.
 */
module.exports = function(app, modules) {
    var section = '/clientAdministration/';

    app.get(section + 'login', function(req, res) {
        res.render('clientAdministration/login.html');
    });

    /* API */
    app.post('/actions' + section + 'login', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var passwordHash = '';

        modules.Async.series([
            function(callback) {
                modules.MongoDefinitions.ClientAdmin.User.findOne({ username: username }, function(err, user) {
                    if (err)
                        throw err;

                    // TODO: Only one of these will ever be true.
                    if (user == null || user.length == 0) {
                        res.send('login-fail');
                        callback('login-fail');
                    }
                    else {
                        passwordHash = user.password;
                        callback(null);
                    }
                });
            },
            function(callback) {
                modules.Bcrypt.compare(password, passwordHash, function(err, result) {
                    if (err)
                        throw err;
                    if (result == true) {
                        req.session.username = username;
                    }
                    else {
                        res.send('login-fail');
                    }
                    callback(null);
                })
            }
        ], function(err) {});
    });
}
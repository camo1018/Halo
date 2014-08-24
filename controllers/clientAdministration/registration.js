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

        var newUser = null;

        modules.Async.series([
            function(callback) {
                if (username == null || username.trim() == '') {
                    res.send('name-empty-error');
                    callback('name-empty-error');
                }

                // Password comes in already hashed.  The hash of an empty string is da39a3ee5e6b4b0d3255bfef95601890afd80709.
                if (password == null || password == '' || password == 'da39a3ee5e6b4b0d3255bfef95601890afd80709') {
                    res.send('password-empty-error');
                    callback('password-empty-error');
                }

                if (password != passwordConfirm) {
                    res.send('password-mismatch-error');
                    callback('password-mismatch-error');
                }

                modules.MongoDefinitions.ClientAdmin.User.find({ username: username }, 'username', function(err, users) {
                    if (err)
                        throw err;
                    if (users.length > 0 ) {
                        res.send('name-exists-error');
                        callback('name-exists-error');
                    }
                    callback(null);
                });
            },
            function(callback) {
                modules.Bcrypt.genSalt(10, function(err, salt) {
                    modules.Bcrypt.hash(password, salt, null, function(err, hash) {
                            if (err)
                                throw err;

                            newUser = new modules.MongoDefinitions.ClientAdmin.User({
                                username: username,
                                password: hash,
                                salt: salt,
                                hasSetup: false
                            });
                            callback(null);
                    });
                });
            },
            function(callback) {
                newUser.save();
                res.send('registration-success');
                callback(null);
            }
        ], function(err) {});
    });
}
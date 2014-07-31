function RegistrationViewmodel() {
    var self = this;

    self.username = ko.observable();
    self.password = ko.observable();
    self.passwordConfirm = ko.observable();


    self.submitRegistration = function() {
        var params = { username: self.username, password: self.password, passwordConfirm: self.passwordConfirm };
        $.post('/actions/clientAdministration/register', params, function(data) {
            switch (data) {
                case 'username-exists':
                    // Username already exists
                    break;
                case 'password-mismatch':
                    // Passwords don't match
                    break;
                case 'registration-success':
                    // Success!
                    break;
            }
        });
    };
}
var registrationViewmodel = new RegistrationViewmodel();
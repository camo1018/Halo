function RegistrationViewmodel() {
    this.username = ko.observable();
    this.password = ko.observable();
    this.passwordConfirm = ko.observable();


    this.submitRegistration = function() {
        var params = { username: this.username, password: this.password, passwordConfirm: this.passwordConfirm };
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
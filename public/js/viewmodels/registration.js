function RegistrationViewmodel() {
    var self = this;

    self.username = ko.observable();
    self.password = ko.observable();
    self.passwordConfirm = ko.observable();

    self.submitRegistration = function() {
        var params = { username: self.username, password: self.password, passwordConfirm: self.passwordConfirm };
        $.post('/actions/clientAdministration/register', params, function(data) {
            switch (data) {
                case 'name-empty-error':
                    $('#name-empty-error').removeClass('not-visible');
                    break;
                case 'name-exists-error':
                    $('#name-exists-error').removeClass('not-visible');
                    break;
                case 'password-empty-error':
                    $('#password-empty-error').removeClass('not-visible');
                    break;
                case 'password-mismatch-error':
                    $('password-mismatch-error').removeClass('not-visible');
                    break;
                case 'registration-success':
                    window.location = '/clientAdministration/login';
                    break;
            }
        });
    };
}
var registrationViewmodel = new RegistrationViewmodel();
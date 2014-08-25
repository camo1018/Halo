function RegistrationViewmodel() {
    var self = this;

    self.username = ko.observable();
    self.password = ko.observable();
    self.passwordConfirm = ko.observable();

    self.submitRegistration = function() {
        $('#name-empty-error, #name-exists-error, #password-empty-error, #password-mismatch-error').addClass('not-displayed');


        var params = { username: self.username, password: self.password, passwordConfirm: self.passwordConfirm };
        $.post('/actions/clientAdministration/register', params, function(data) {
            switch (data) {
                case 'name-empty-error':
                    $('#name-empty-error').removeClass('not-displayed');
                    break;
                case 'name-exists-error':
                    $('#name-exists-error').removeClass('not-displayed');
                    break;
                case 'password-empty-error':
                    $('#password-empty-error').removeClass('not-displayed');
                    break;
                case 'password-mismatch-error':
                    $('password-mismatch-error').removeClass('not-displayed');
                    break;
                case 'registration-success':
                    window.location = '/clientAdministration/login';
                    break;
            }
        });
    };
}
var registrationViewmodel = new RegistrationViewmodel();
function LoginViewmodel() {
    var self = this;

    self.username = ko.observable();
    self.password = ko.observable();

    self.submitLogin = function() {
        $('#login-error').addClass('not-visible');

        var params = { username: self.username, password: self.password };
        $.post('/actions/clientAdministration/login', params, function(data) {
            switch (data) {
                case 'login-fail':
                    $('#login-error').removeClass('not-visible');
                    break;
                case 'login-success':
                    // Success login
                    break;
            }
        });
    };
}
var loginViewmodel = new LoginViewmodel();
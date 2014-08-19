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
                case 'login-success-setup':
                    window.location = '/setup/setupWizard';
                    break;
                case 'login-success':
                    window.location= '/companyInfo';
            }
        });
    };
}
var loginViewmodel = new LoginViewmodel();
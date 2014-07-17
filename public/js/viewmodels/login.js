function LoginViewmodel() {
    this.username = ko.observable();
    this.password = ko.observable();

    this.submitLogin = function() {
        var params = { username: this.username, password: this.password };
        $.post('/actions/clientAdministration/login', params, function(data) {
            switch (data) {
                case 'login-fail':
                    // Fail login
                    break;
                case 'login-success':
                    // Success login
                    break;
            }
        });
    };
}
var loginViewmodel = new LoginViewmodel();
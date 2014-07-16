function LoginViewmodel() {
    this.username = ko.observable();
    this.password = ko.observable();

    this.submitLogin = function() {
        var params = { username: this.username, password: this.password };
        $.post('/actions/clientAdministration', params, function() {

        });
    };
}
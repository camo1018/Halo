function CompanyInfoViewmodel() {
    var self = this;

    self.stepNumber = ko.observable(1);

    self.companyName = ko.observable();
    self.email= ko.observable();
    self.billingAddress = ko.observable();
    self.phoneNumber = ko.observable();

    self.welcomeMessage = ko.observable();
    self.companyLogoUrl = ko.observable();

    self.submit = function() {
        var params = { username: self.username, companyName: self.companyName, email: self.email, billingAddress: self.billingAddress, phoneNumber: self.phoneNumber, welcomeMessage: self.welcomeMessage, companyLogoUrl: self.companyLogoUrl };
        $.post('/actions/clientAdministration/setup/submitCompanyInfo', params, function(data) {
           if (data == 'failed') {
               alert('Failed to process request.  Please try again.');
           }
           else {
               window.location = '/clientAdministration/setup/productCatalog';
           }
        });
    };
}
var companyInfoViewmodel = new CompanyInfoViewmodel();
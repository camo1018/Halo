function CompanyInfoViewmodel() {
    var self = this;

    self.stepNumber = ko.observable(1);

    self.companyName = ko.observable();
    self.email= ko.observable();
    self.billingAddress = ko.observable();
    self.phoneNumber = ko.observable();

    self.welcomeMessage = ko.observable();
    self.companyLogoContent = ko.observable();

    self.submit = function() {
        var params = { username: self.username, companyName: self.companyName, email: self.email, billingAddress: self.billingAddress, phoneNumber: self.phoneNumber, welcomeMessage: self.welcomeMessage, companyLogoContent: self.companyLogoContent };
        $.post('/actions/clientAdministration/setup/submitCompanyInfo', params, function(data) {
           if (data == 'failed') {
               alert('Failed to process request.  Please try again.');
           }
           else {
               window.location = '/clientAdministration/setup/productCatalog';
           }
        });
    };

    self.promptUpload = function() {
        $('#logo-file').click();
    }

    self.submitLogo = function(imageFile) {
        if (!imageFile.type.match("image.*")) {
            alert('Not a valid file.  Please upload a valid image file (jpg, png, etc.)');
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = self.uploadFile;
    }

    self.uploadFile = function(imageSrc) {
        self.companyLogoContent(imageSrc.target.result);
        $('#logo-image').attr('src', imageSrc.target.result);
    }
}
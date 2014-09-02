module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'companyInfo', function(req, res) {
        res.render('clientAdministration/setup/companyInfo.html');
    });

    /* API */
    app.post('/actions' + section + 'submitCompanyInfo', function(req, res) {
        var username = req.session.username;
        var companyName = req.body.companyName;
        var email = req.body.email;
        var billingAddress = req.body.billingAddress;
        var phoneNumber = req.body.phoneNumber;

        var welcomeMessage = req.body.welcomeMessage;
        var companyLogoContent = req.body.companyLogoContent;

        var companyInfo = new modules.MongoDefinitions.ClientAdmin.CompanyInfo({
            username: username,
            companyName: companyName,
            contactEmail: email,
            billingAddress: billingAddress,
            contactPhone: phoneNumber,

            welcomeMessage: welcomeMessage,
            companyLogoContent: companyLogoContent
        })
        companyInfo.save(function(err) {
            if (err)
                res.send('failed');
            res.send('submitted');
        });
    });
}
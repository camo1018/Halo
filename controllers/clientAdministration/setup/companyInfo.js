module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'companyInfo', function(req, res) {
        res.render('clientAdministration/setup/companyInfo.html');
    });
}
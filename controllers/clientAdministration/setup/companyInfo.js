module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'setupWizard', function(req, res) {
        res.render('clientAdministration/setup/setupWizard.html');
    });
}
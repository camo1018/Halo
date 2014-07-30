module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'preview', function(req, res) {
        res.render('clientAdministration/setup/preview.html');
    });
}
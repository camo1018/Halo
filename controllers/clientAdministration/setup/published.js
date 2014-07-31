module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'published', function(req, res) {
        res.render('clientAdministration/setup/published.html');
    });
}
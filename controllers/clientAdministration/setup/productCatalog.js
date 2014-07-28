module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'productCatalog', function(req, res) {
        res.render('clientAdministration/setup/productCatalog.html');
    });
}
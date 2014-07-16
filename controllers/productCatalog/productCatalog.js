module.exports = function(app, modules) {
    var section = '/productCatalog/';

    app.get(section + 'intro', function(req, res) {
        res.render('productCatalog/intro.html');
    });

    app.get(section + 'welcome', function(req, res) {
        res.render('productCatalog/welcome.html');
    });

    app.get(section + 'finished', function(req, res) {
        res.render('productCatalog/finished.html');
    });
}
module.exports = function(app, modules) {
    var section = '/productCatalog/';

    app.get(section + 'review', function(req, res) {
        res.render('productCatalog/review.html');
    });

    app.get('/actions' + section + 'getSelectedProducts', function(req, res) {
        res.json(req.session.selectedProducts);
    });
}
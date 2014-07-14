module.exports = function(app, modules) {

    app.get('/review', function(req, res) {
        res.render('productCatalog/review.html');
    });

    app.get('/actions/getSelectedProducts', function(req, res) {
        res.json(req.session.selectedProducts);
    });

}
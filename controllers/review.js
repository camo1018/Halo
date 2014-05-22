module.exports = function(app, mongoose, MongoDefinitions, async) {

    app.get('/review', function(req, res) {
        res.render('review.html');
    });

    app.get('/actions/getSelectedProducts', function(req, res) {
        res.json(req.session.selectedProducts);
    });

}
module.exports = function(app, mongoose, MongoDefinitions, async) {
	app.get('/productView', function(req, res) {
		res.render('productView.html');
	});

	app.get('/actions/getProductsForStep', function(req, res) {
		var serviceStep = req.session.serviceStep;

		// Get the step name.
        var stepName = '';
        var products = [];

        console.log('Requesting products with service step order of ' + serviceStep);

		async.series([
            function(callback) {
                MongoDefinitions.ServiceStep.findOne({ stepOrder : parseInt(serviceStep) }, function(err, result) {
                    stepName = result.stepName;
                    callback(null);
                });
            },
			function(callback) {
				MongoDefinitions.Product.find({ type: serviceStep }, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        products.push(results[i]);
                    }

                    if (products.length > 0)
                        res.json(products);
                    else
                        res.send(null);
                    callback(null);
                })
			}
		]);
	});
}
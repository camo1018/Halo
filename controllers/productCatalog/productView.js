module.exports = function(app, modules) {
    var section = '/productCatalog/';

	app.get(section + 'productView', function(req, res) {
		res.render('productCatalog/productView.html');
	});

	app.get('/actions' + section + 'getProductsForStep', function(req, res) {
		var serviceStep = req.session.serviceStep;
        var serviceType = req.session.serviceType;

		// Get the step name.
        var productType = '';
        var products = [];

        console.log('Requesting products with service step order of ' + serviceStep + ' and belonging to service type + ' + serviceType);

		modules.Async.series([
            function(callback) {
                modules.MongoDefinitions.ProductCatalog.ServiceStep.findOne({ serviceName: serviceType, stepOrder : parseInt(serviceStep) }, function(err, result) {
                    productType = result.productType;
                    callback(null);
                });
            },
			function(callback) {
				modules.MongoDefinitions.ProductCatalog.Product.find({ type: productType }, function(err, results) {
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

    app.get('/actions' + section + 'getProduct', function(req, res) {
        var productType = req.query.productType;
        var productName = req.query.productName;
        modules.MongoDefinitions.ProductCatalog.Product.findOne({ type: productType, name: productName }, function(err, result) {
            res.send(result);
        })
    });

    app.get('/actions' + section + 'selectProduct', function(req, res) {
        var product = req.query.product;
        var currentStepOrder = req.session.serviceStep;
        req.session.selectedProducts.push(product);
        req.session.finishedSteps.push(parseInt(currentStepOrder));
        res.send('done');
    });
}
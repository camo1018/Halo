module.exports = function(app, modules) {
    var section = '/clientAdministration/setup/';

    app.get(section + 'productCatalog', function(req, res) {
        res.render('clientAdministration/setup/productCatalog.html');
    });

    app.get(section + 'getCategories', function(req, res) {
        getCategories(function(categories) {
            res.send(categories);
        });
    });

    app.get(section + 'getResellers', function(req, res) {
        getResellers(function(resellers) {
            res.send(resellers);
        });
    });

    app.get(section + 'getProducts', function(req, res) {
        var type = req.query.type;
        var reseller = req.query.reseller;

        getProductsByReseller(type, reseller, function(products) {
            res.send(products);
        });
    });

    var getCategories = function(callback) {
        modules.MongoDefinitions.ProductCatalog.ServiceStep.find({}, function(err, categories) {
            if (err)
                throw err;
            callback(categories);
        });
    }

    var getResellers = function (callback) {
        modules.MongoDefinitions.ProductCatalog.Reseller.find({}, function(err, resellers) {
            if (err)
                throw err;
            callback(resellers);
        });
    };

    var getProducts = function(type, callback) {
        modules.MongoDefinitions.ProductCatalog.Product.find({ type: type }, function(err, products) {
            if (err)
                throw err;
            callback(products);
        });
    }

    var getProductsByReseller = function(type, reseller, callback) {
        modules.MongoDefinitions.ProductCatalog.Product.find({ type: type, resellerId: reseller }, function(err, products) {
            if (err)
                throw err;
            callback(products);
        });
    }
}
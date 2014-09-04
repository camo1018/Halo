function Product(product) {
    var self = this;

    self.product = product;
    self.isSelected = ko.observable(false);
}

function ProductCatalogViewmodel(categories, products, resellers) {
    var self = this;

    self.products = ko.observableArray();

    for(var i = 0; i < products.length; i++) {
        self.products.push(new Product(products[i]));
    }

    self.categories = ko.observableArray(categories);

    self.resellers = ko.observableArray(resellers);
    self.currentReseller = ko.observable(resellers[0]);

    self.uploadCategory = ko.observable(categories[0].stepName);
    self.currentCategoryIndex = ko.observable(0);

    self.setCategory = function(index) {
        self.currentCategoryIndex(index);
        if (self.currentCategoryIndex() < 0)
            return;

        var params = { type: categories[self.currentCategoryIndex()].stepHeaderName, reseller: self.currentReseller().id };
        self.getProducts(params);
    };

    self.setReseller = function(index) {
        self.currentReseller(self.resellers()[index]);
        var params = { type: categories[self.currentCategoryIndex()].stepHeaderName, reseller: self.currentReseller().id };
        self.getProducts(params);
    };

    self.getProducts = function(params) {
        $.get('/actions/clientAdministration/setup/getProducts', params, function(products) {
            var productsObservable = new Array();
            for (var i = 0; i < products.length; i++) {
                productsObservable.push(new Product(products[i]));
            }
            self.products(productsObservable);
            self.refreshMasonry();
        });
    }

    self.refreshMasonry = function() {
        if (typeof masonry !== 'undefined') {
            masonry.masonry('reloadItems');
            masonry.masonry('layout');
        }
    };

    self.toggleProduct = function(product) {
        var params = { productId: product.id };
        if (product.isSelected() === false) {
            $.post('/actions/clientAdministration/setup/removeProduct', params, function() {
                product.isSelected(false);
            });
        }
        else {
            $.post('/actions/clientAdministration/setup/selectProduct', params, function() {
                product.isSelected(true);
            });
        }
    };

    self.nextStep = function() {
        window.location = '/clientAdministration/setup/preview';
    }

    self.stepNumber = ko.observable(2);
}
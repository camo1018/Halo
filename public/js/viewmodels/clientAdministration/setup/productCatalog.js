function ProductCatalogViewmodel(categories, products, resellers) {
    var self = this;

    self.categories = ko.observableArray(categories);
    self.products = ko.observableArray(products);

    self.resellers = ko.observableArray(resellers);
    self.currentReseller = ko.observable(resellers[0]);

    self.uploadCategory = ko.observable(categories[0].stepName);
    self.currentCategoryIndex = ko.observable(0);

    self.setCategory = function(index) {
        self.currentCategoryIndex(index);
        var params = { type: categories[self.currentCategoryIndex()].stepHeaderName, reseller: self.currentReseller().id };
        self.getProducts(params);
    };

    self.setReseller = function(index) {
        self.currentReseller(self.resellers()[index]);
        var params = { type: categories[self.currentCategoryIndex()].stepHeaderName, reseller: self.currentReseller().id };
        self.getProducts(params);
    };

    self.getProducts = function(params) {
        $.get('/clientAdministration/setup/getProducts', params, function(products) {
            self.products(products);
            self.refreshMasonry();
        });
    }

    self.refreshMasonry = function() {
        if (typeof masonry !== 'undefined') {
            masonry.masonry('reloadItems');
            masonry.masonry('layout');
        }
    };

    self.stepNumber = ko.observable(2);
    self.refreshMasonry();
}
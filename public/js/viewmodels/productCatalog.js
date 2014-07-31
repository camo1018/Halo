function ProductCatalogViewmodel() {
    var self = this;

    self.categories = [
        { name: 'Caskets', id: 'caskets' },
        { name: 'Vases', id: 'vases' }
    ];

    self.products = ko.observableArray([
        { name: 'Test 1', value: '5500', imgUrl: '/img/image.png' },
        { name: 'Test 2', value: '4000', imgUrl: '/img/image.png' },
        { name: 'Test 3', value: '2555', imgUrl: '/img/image.png' },
        { name: 'Test 4', value: '1100', imgUrl: '/img/image.png' },
        { name: 'Test 5', value: '2555', imgUrl: '/img/image.png' },
        { name: 'Test 6', value: '2576', imgUrl: '/img/image.png' },
        { name: 'Test 7', value: '5129', imgUrl: '/img/image.png' },
        { name: 'Test 8', value: '1000', imgUrl: '/img/image.png' }
    ]);

    self.currentCategoryIndex = ko.observable(0);

    self.setCategory = function(index) {
        self.currentCategoryIndex(index);
    };

    self.refreshMasonry = function() {
        if (typeof masonry !== 'undefined') {
            masonry.masonry('reloadItems');
            masonry.masonry('layout');
        }
    }

    self.stepNumber = ko.observable(2);
}
var productCatalogViewmodel = new ProductCatalogViewmodel();
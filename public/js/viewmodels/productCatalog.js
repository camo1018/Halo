function ProductCatalogViewmodel() {

    this.products = [
        { name: 'Test 1', value: '5500', imgUrl: '/img/image.png' },
        { name: 'Test 2', value: '4000', imgUrl: '/img/image.png' },
        { name: 'Test 3', value: '2555', imgUrl: '/img/image.png' },
        { name: 'Test 4', value: '1100', imgUrl: '/img/image.png' },
        { name: 'Test 5', value: '2555', imgUrl: '/img/image.png' },
        { name: 'Test 6', value: '2576', imgUrl: '/img/image.png' },
        { name: 'Test 7', value: '5129', imgUrl: '/img/image.png' },
        { name: 'Test 8', value: '1000', imgUrl: '/img/image.png' }
    ];

    this.stepNumber = ko.observable(2);
}
var productCatalogViewmodel = new ProductCatalogViewmodel();
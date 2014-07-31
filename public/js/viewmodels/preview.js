function PreviewViewmodel() {
    var self = this;

    self.selectedProducts = [
        { name: 'Test 1', price: '5500', imgUrl: '/img/image.png' },
        { name: 'Test 2', price: '4000', imgUrl: '/img/image.png' },
        { name: 'Test 3', price: '2555', imgUrl: '/img/image.png' },
        { name: 'Test 4', price: '1100', imgUrl: '/img/image.png' },
        { name: 'Test 5', price: '2555', imgUrl: '/img/image.png' },
        { name: 'Test 6', price: '2576', imgUrl: '/img/image.png' },
        { name: 'Test 7', price: '5129', imgUrl: '/img/image.png' },
        { name: 'Test 8', price: '1000', imgUrl: '/img/image.png' }
    ];

    self.stepNumber = ko.observable(3);
}
var previewViewmodel = new PreviewViewmodel();
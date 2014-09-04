/**
 * Created by Paul on 7/17/2014.
 */
$.get('/actions/clientAdministration/setup/getCategories', null, function(categories) {
    $.get('/actions/clientAdministration/setup/getResellers', null, function(resellers) {
        var params = { type: categories[0].stepHeaderName, reseller: resellers[0].id };
        $.get('/actions/clientAdministration/setup/getProducts', params, function(products) {
            var productCatalogViewmodel = new ProductCatalogViewmodel(categories, products, resellers);
            ko.applyBindings(productCatalogViewmodel);
        });
    });
});

var masonry = $('#catalog-detail-product-container').masonry({
    itemSelector: '.catalog-detail-panel-product',
    gutter: 50,
    visibleStyle: {
        opacity: 1,
        transform: 'scale(1)'
    },
    hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)'
    }
});

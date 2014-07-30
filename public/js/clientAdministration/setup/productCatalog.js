/**
 * Created by Paul on 7/17/2014.
 */
ko.applyBindings(productCatalogViewmodel);

$(function() {
    $('#catalog-detail-product-container').masonry({
        itemSelector: '.catalog-detail-panel-product',
        gutter: 50
    });
});
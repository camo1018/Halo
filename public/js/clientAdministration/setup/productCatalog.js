/**
 * Created by Paul on 7/17/2014.
 */
ko.applyBindings(productCatalogViewmodel);

$(function() {
    $('#catalog-detail-product-container').masonry({
        columnWidth: 200,
        itemSelector: '.catalog-detail-panel-product'
    });
});
/* Product Catalog Definitions */
var productCatalogProduct = require('./productCatalog/product.js');
var productCatalogService = require('./productCatalog/service.js');

exports.ProductCatalog = {
    Product: productCatalogProduct.Product,
    Service: productCatalogService.Service,
    ServiceStep: productCatalogService.ServiceStep
}

/* Client Administration Definitions */
var clientAdminUser = require('./clientAdministration/user.js');

exports.ClientAdmin = {
    User: clientAdminUser.User
}


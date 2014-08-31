/* Product Catalog Definitions */
var productCatalogProduct = require('./productCatalog/product.js');
var productCatalogService = require('./productCatalog/service.js');

exports.ProductCatalog = {
    Product: productCatalogProduct.Product,
    Reseller: productCatalogProduct.Reseller,
    Service: productCatalogService.Service,
    ServiceStep: productCatalogService.ServiceStep
}

/* Client Administration Definitions */
var clientAdminUser = require('./clientAdministration/user.js');
var clientAdminCompanyInfo = require('./clientAdministration/companyInfo.js');

exports.ClientAdmin = {
    User: clientAdminUser.User,
    CompanyInfo: clientAdminCompanyInfo.CompanyInfo
}



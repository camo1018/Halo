// Halo - MongoDB Default Setup
// Paul Park

var mongoose = require('mongoose');
var mongoHostname = 'mongodb://127.0.0.1:27017/halo';
mongoose.connect(mongoHostname);

var MongoDefinitions = require('./models/mongoDefinitions');

MongoDefinitions.ProductCatalog.Service.collection.drop();
MongoDefinitions.ProductCatalog.ServiceStep.collection.drop();

// Default Services and their steps
var traditionalService = new MongoDefinitions.ProductCatalog.Service({
	serviceName: 'traditional',
	headerLabel: 'Traditional Service'
});

var casketStepTraditional = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Caskets',
	stepHeaderName: 'casket',
	stepOrder: 1,
	serviceName: 'traditional',
    productType: 'casket'
});

var vaultStep = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Vaults',
	stepHeaderName: 'vault',
	stepOrder: 2,
	serviceName: 'traditional',
    productType: 'vault'
});

var flowerStepTraditional = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Flowers',
	stepHeaderName: 'floral tribute',
	stepOrder: 3,
	serviceName: 'traditional',
    productType: 'flower'
});

var keepsakeStepTraditional = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Keepsakes',
	stepHeaderName: 'keepsake',
	stepOrder: 4,
	serviceName: 'traditional',
    productType: 'keepsake'
});

var cremationService = new MongoDefinitions.ProductCatalog.Service({
	serviceName: 'cremation',
	headerLabel: 'Cremation Service'
});

var casketStepCremation = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Caskets',
	stepHeaderName: 'casket',
	stepOrder: 1,
	serviceName: 'cremation',
    productType: 'casket'
});

var urnStep = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Urns',
	stepHeaderName: 'urn',
	stepOrder: 2,
	serviceName: 'cremation',
    productType: 'urn'
});

var flowerStepCremation = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Flowers',
	stepHeaderName: 'floral tribute',
	stepOrder: 3,
	serviceName: 'cremation',
    productType: 'flower'
});

var keepsakeStepCremation = new MongoDefinitions.ProductCatalog.ServiceStep({
	stepName: 'Keepsakes',
	stepHeaderName: 'keepsake',
	stepOrder: 4,
	serviceName: 'cremation',
    productType: 'keepsake'
});

traditionalService.save();
casketStepTraditional.save();
vaultStep.save();
flowerStepTraditional.save();
keepsakeStepTraditional.save();
cremationService.save();
casketStepCremation.save();
urnStep.save();
flowerStepCremation.save();
keepsakeStepCremation.save();

// Products
MongoDefinitions.ProductCatalog.Product.collection.drop();

// Casket
var brownCasket = new MongoDefinitions.ProductCatalog.Product( {
    type: 'casket',
    name: 'Brown Casket',
    imageUrl: 'http://www.damianofuneralhome.com/Malorie_6036340_PC_O.jpg',
    price: 3000
})
brownCasket.save();

var grayCasket = new MongoDefinitions.ProductCatalog.Product( {
    type: 'casket',
    name: 'Gray Casket',
    imageUrl: 'http://3.bp.blogspot.com/_kx-6LfX6YXk/TVSuLSqfWhI/AAAAAAAAAD0/mII7Iuebqcw/s1600/casket.jpg',
    price: 2500
})
grayCasket.save();

// Vault
var someVault = new MongoDefinitions.ProductCatalog.Product( {
    type: 'vault',
    name: 'Purple Vault',
    imageUrl: 'http://www.image.com',
    price: 2700
})
someVault.save();

// End Routes

// mongoClient.connect(mongoHostname, function(err, db) {
// 	if (err) throw err;

// 	var collection = db.collection('test');
// 	collection.insert({name: 'Paul'}, function(err, docs) {	
// 	});
// });

console.log("Database Setup");
//process.exit(0);
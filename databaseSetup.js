// Halo - MongoDB Default Setup
// Paul Park

var mongoose = require('mongoose');
var mongoHostname = 'mongodb://127.0.0.1:27017/halo';
mongoose.connect(mongoHostname);

var MongoDefinitions = require('./classes/mongoDefinitions');

MongoDefinitions.Service.collection.drop();
MongoDefinitions.ServiceStep.collection.drop();

// Default Services and their steps
var traditionalService = new MongoDefinitions.Service({
	serviceName: 'traditional',
	headerLabel: 'Traditional Service'
});

var casketStepTraditional = new MongoDefinitions.ServiceStep({
	stepName: 'Caskets',
	stepHeaderName: 'casket',
	stepOrder: 1,
	serviceName: 'traditional'
});

var vaultStep = new MongoDefinitions.ServiceStep({
	stepName: 'Vaults',
	stepHeaderName: 'vault',
	stepOrder: 2,
	serviceName: 'traditional'
});

var flowerStepTraditional = new MongoDefinitions.ServiceStep({
	stepName: 'Flowers',
	stepHeaderName: 'floral tribute',
	stepOrder: 3,
	serviceName: 'traditional'
});

var keepsakeStepTraditional = new MongoDefinitions.ServiceStep({
	stepName: 'Keepsakes',
	stepHeaderName: 'keepsake',
	stepOrder: 4,
	serviceName: 'traditional'
});

var cremationService = new MongoDefinitions.Service({
	serviceName: 'cremation',
	headerLabel: 'Cremation Service'
});

var casketStepCremation = new MongoDefinitions.ServiceStep({
	stepName: 'Caskets',
	stepHeaderName: 'casket',
	stepOrder: 1,
	serviceName: 'cremation'
});

var urnStep = new MongoDefinitions.ServiceStep({
	stepName: 'Urns',
	stepHeaderName: 'urn',
	stepOrder: 2,
	serviceName: 'cremation'
});

var flowerStepCremation = new MongoDefinitions.ServiceStep({
	stepName: 'Flowers',
	stepHeaderName: 'floral tribute',
	stepOrder: 3,
	serviceName: 'cremation'
});

var keepsakeStepCremation = new MongoDefinitions.ServiceStep({
	stepName: 'Keepsakes',
	stepHeaderName: 'keepsake',
	stepOrder: 4,
	serviceName: 'cremation'
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

// End Routes

// mongoClient.connect(mongoHostname, function(err, db) {
// 	if (err) throw err;

// 	var collection = db.collection('test');
// 	collection.insert({name: 'Paul'}, function(err, docs) {	
// 	});
// });

console.log("Database Setup");
//process.exit(0);
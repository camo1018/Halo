// Halo - MongoDB Default Setup
// Paul Park

var mongoose = require('mongoose');
var async = require('async');
var MongoDefinitions = require('./models/mongoDefinitions');
async.series([
    function(callback) {
        var mongoHostname = 'mongodb://127.0.0.1:27017/halo';
        mongoose.connect(mongoHostname);

        async.series([
            function(subCallback) {
                MongoDefinitions.ProductCatalog.Service.collection.drop(function() {
                    subCallback();
                });
            },
            function(subCallback) {
                MongoDefinitions.ProductCatalog.ServiceStep.collection.drop(function() {
                    subCallback();
                });
            },
            function(subCallback) {
                MongoDefinitions.ProductCatalog.Product.collection.drop(function() {
                    subCallback();
                });
            },
            function(subCallback) {
                MongoDefinitions.ProductCatalog.Reseller.collection.drop(function() {
                    subCallback();
                })
            },
            function(subCallback) {
                callback()
            }
        ]);
    },
    function(callback) {
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

        // Casket
        var brownCasket = new MongoDefinitions.ProductCatalog.Product( {
            id: 'browncasket',
            type: 'casket',
            name: 'Brown Casket',
            imageUrl: 'http://www.damianofuneralhome.com/Malorie_6036340_PC_O.jpg',
            price: 3000,
            resellerId: 'batesville'
        });
        brownCasket.save();

        var grayCasket = new MongoDefinitions.ProductCatalog.Product({
            id: 'graycasket',
            type: 'casket',
            name: 'Gray Casket',
            imageUrl: 'http://3.bp.blogspot.com/_kx-6LfX6YXk/TVSuLSqfWhI/AAAAAAAAAD0/mII7Iuebqcw/s1600/casket.jpg',
            price: 2500,
            resellerId: 'batesville'
        });
        grayCasket.save();

        var veteranCasket = new MongoDefinitions.ProductCatalog.Product({
            id: 'veterancasket',
            type: 'casket',
            name: 'Veteran Casket',
            imageUrl: 'http://www.veterancaskets.com/store/images/D/air-force-casket-full.jpg',
            price: 5000,
            resellerId: 'sauder'
        });
        veteranCasket.save();

        // Vault
        var someVault = new MongoDefinitions.ProductCatalog.Product({
            id: 'purplevault',
            type: 'vault',
            name: 'Purple Vault',
            imageUrl: 'http://www.image.com',
            price: 2700,
            resellerId: 'batesville'
        });
        someVault.save();

        var steelVault = new MongoDefinitions.ProductCatalog.Product({
            id: 'steelvault',
            type: 'vault',
            name: 'Steel Vault',
            imageUrl: 'http://www.austinfuneralservice.com/wp-content/uploads/04-Stainless-Steel-Triune.jpg',
            price: 7000,
            resellerId: 'sauder'
        });
        steelVault.save();

        // Resellers

        var batesville = new MongoDefinitions.ProductCatalog.Reseller({
            id: 'batesville',
            name: 'Batesville Casket Company'
        });
        batesville.save();

        var sauder = new MongoDefinitions.ProductCatalog.Reseller({
            id: 'sauder',
            name: 'Sauder Funeral Products'
        });
        sauder.save();

        // End Routes

        console.log("Database Setup");
        //process.exit(0);
    }
]);



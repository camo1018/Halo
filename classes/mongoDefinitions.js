var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
	serviceName: String,
	headerLabel: String
});
exports.Service = mongoose.model('Service', serviceSchema);

var serviceStepSchema = mongoose.Schema({
	stepName: String,
	// For what to display on the big header label.
	stepHeaderName: String,
	stepOrder: Number,
	serviceName: String,
    productType: String
});
exports.ServiceStep = mongoose.model('ServiceStep', serviceStepSchema);

var productSchema = mongoose.Schema({
	type: String,
	name: String,
	imageUrl: String,
	price: Number
});
exports.Product = mongoose.model('Product', productSchema);

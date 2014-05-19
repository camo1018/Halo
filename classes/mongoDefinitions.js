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
	serviceName: String
});
exports.ServiceStep = mongoose.model('ServiceStep', serviceStepSchema);
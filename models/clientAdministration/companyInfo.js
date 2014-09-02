var mongoose = require('mongoose');

var companyInfoSchema = mongoose.Schema({
    username: { type: String, unique: true, index: true },
    companyName: String,
    contactEmail: String,
    billingAddress: String,
    contactPhone: String,

    welcomeMessage: String,
    companyLogoContent: String
});
exports.CompanyInfo = mongoose.model('companyInfo', companyInfoSchema);
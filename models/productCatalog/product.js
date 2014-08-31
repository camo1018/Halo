var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    type: String,
    name: String,
    imageUrl: String,
    price: Number,
    resellerId: String
});
exports.Product = mongoose.model('Product', productSchema);

var resellerSchema = mongoose.Schema({
    id: { type: String, unique: true, index: true },
    name: String
});
exports.Reseller = mongoose.model('Reseller', resellerSchema);

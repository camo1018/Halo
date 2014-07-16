var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    type: String,
    name: String,
    imageUrl: String,
    price: Number
});
exports.Product = mongoose.model('Product', productSchema);

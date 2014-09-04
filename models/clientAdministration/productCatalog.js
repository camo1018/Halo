var mongoose = require('mongoose');

var selectedProductSchema = mongoose.Schema({
    username: String,
    productId: String
});
exports.SelectedProduct = mongoose.model('SelectedProduct', selectedProductSchema);

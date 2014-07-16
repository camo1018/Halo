var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    salt: String
});
exports.User = mongoose.model('User', userSchema);

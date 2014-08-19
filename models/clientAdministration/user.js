var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    salt: String,
    hasSetup: Boolean
});
exports.User = mongoose.model('User', userSchema);

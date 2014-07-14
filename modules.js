var async = require('async');
exports.Async = async;

var request = require('request');
exports.Request = request;

var mongoose = require('mongoose');
var mongoHostname = 'mongodb://127.0.0.1:27017/halo';
mongoose.connect(mongoHostname);
exports.Mongoose = mongoose;

var mongoDefinitions = require('./classes/mongoDefinitions');
exports.MongoDefinitions = mongoDefinitions;

/* No LINQ support yet */
// var linq = require('linq');
// exports.LINQ = linq;

var bcrypt = require('bcrypt');
exports.Bcrypt = bcrypt;


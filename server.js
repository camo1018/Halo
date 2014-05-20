// Halo NodeJS Server 
// Uses ExpressJS and EJS
// Paul Park

var express = require('express');
var ejs = require('ejs');
var async = require('async');

var mongoose = require('mongoose');
var mongoHostname = 'mongodb://127.0.0.1:27017/halo';
mongoose.connect(mongoHostname);
var MongoDefinitions = require('./classes/mongoDefinitions');

var app = express();

app.use(express.cookieParser());
app.use(express.session({ secret: 'QaBiOP21ABTSX' }));

app.configure(function() {
	app.set('views', __dirname+'/views');
	app.set('view options', { pretty: true });
	app.set('view engine', 'html');
	app.engine('.html', ejs.renderFile);
	app.use(express.static(__dirname+'/public'));
});

// Load Classes
// var Users = require('./classes/users.js');

// MongoDB Models
//var User = mongoose.model('User', { firstName: String, lastName: String, email: String, departedName: String });

// Routes

// Default HTML Pages
app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/intro', function(req, res) {
	res.render('intro.html');
});

app.get('/welcome', function(req, res) {
	res.render('welcome.html');
});

app.get('/review', function(req, res) {
	res.render('review.html');
});

app.get('/finished', function(req, res) {
	res.render('finished.html');
});

// mongoClient.connect(mongoHostname, function(err, db) {
// 	if (err) throw err;

// 	var collection = db.collection('test');
// 	collection.insert({name: 'Paul'}, function(err, docs) {	
// 	});
// });

// Controller Initialization
require('./controllers/clientForm.js')(app, mongoose, MongoDefinitions, async);
require('./controllers/stepSelection.js')(app, mongoose, MongoDefinitions, async);
require('./controllers/productCatalog.js')(app, mongoose, MongoDefinitions, async);

console.log("Server started at port 8000.");

app.listen(8000);
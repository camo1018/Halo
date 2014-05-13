// Halo NodeJS Server 
// Uses ExpressJS and EJS
// Paul Park

var express = require('express');
var ejs = require('ejs');

var mongoose = require('mongoose');
var mongoHostname = 'mongodb://127.0.0.1:27017/halo';
mongoose.connect(mongoHostname);

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
var User = mongoose.model('User', { firstName: String, lastName: String, email: String, departedName: String });

// Routes

// HTML
app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/intro', function(req, res) {
	res.render('intro.html');
});

app.get('/welcome', function(req, res) {
	res.render('welcome.html');
});

app.get('/clientForm', function(req, res) {
	res.render('clientForm.html');
});

app.get('/serviceSelect', function(req, res) {
	res.render('serviceSelect.html');
});

app.get('/stepScreen', function(req, res) {
	res.render('stepScreen.html');
});

app.get('/productView', function(req, res) {
	res.render('productView.html');
});

app.get('/review', function(req, res) {
	res.render('review.html');
});

app.get('/finished', function(req, res) {
	res.render('finished.html');
});

// Server-side Function Routes
app.get('/actions/submitClientInfo', function(req, res) {
	console.log('Submitting client info to the server.');
	var firstName = req.query.firstName;
	var lastName = req.query.lastName;
	var email = req.query.email;
	var departedName = req.query.departedName;
	
	var user = new User({ firstName: firstName, lastName: lastName, email: email, departedName: departedName });
	user.save(function (err) {
		if (err) throw err;
		console.log('Client info submitted.');
	});
	res.send('good');
});

// End Routes

// mongoClient.connect(mongoHostname, function(err, db) {
// 	if (err) throw err;

// 	var collection = db.collection('test');
// 	collection.insert({name: 'Paul'}, function(err, docs) {	
// 	});
// });

console.log("Server started at port 8000.");

app.listen(8000);
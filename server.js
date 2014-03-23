// Halo NodeJS Server 
// Uses ExpressJS and EJS
// Paul Park

var express = require('express');
var ejs = require('ejs');
var app = express();

app.configure(function() {
	app.set('views', __dirname+'/views');
	app.set('view options', { pretty: true });
	app.set('view engine', 'html');
	app.engine('.html', ejs.renderFile);
	app.use(express.static(__dirname+'/public'));
});

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

// End Routes

console.log("Server started at port 8000.");

app.listen(8000);
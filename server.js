// Halo NodeJS Server 
// Uses ExpressJS and EJS
// Paul Park

var express = require('express');
var ejs = require('ejs');

var modules = require('./modules');

var app = express();

app.use(express.cookieParser());
app.use(express.session({ secret: 'QaBiOP21ABTSX' }));
app.use(express.urlencoded());
app.use(express.json());

app.configure(function() {
	app.set('views', __dirname+'/views');
	app.set('view options', { pretty: true });
	app.set('view engine', 'html');
	app.engine('.html', ejs.renderFile);
	app.use(express.static(__dirname+'/public'));
});

// MongoDB Models
//var User = mongoose.model('User', { firstName: String, lastName: String, email: String, departedName: String });

// Routes

// Default HTML Pages
app.get('/', function(req, res) {
	res.render('index.html');
});

// mongoClient.connect(mongoHostname, function(err, db) {
// 	if (err) throw err;

// 	var collection = db.collection('test');
// 	collection.insert({name: 'Paul'}, function(err, docs) {	
// 	});
// });

// Controller Initialization
/* Product Catalog */
require('./controllers/productCatalog/productCatalog.js')(app, modules);
require('./controllers/productCatalog/stepSelection.js')(app, modules);
require('./controllers/productCatalog/productView.js')(app, modules);
require('./controllers/productCatalog/review.js')(app, modules);

/* Client Administration */
require('./controllers/clientAdministration/login.js')(app, modules);
require('./controllers/clientAdministration/registration.js')(app, modules);
require('./controllers/clientAdministration/setup/setupWizard.js')(app, modules);
require('./controllers/clientAdministration/setup/companyInfo.js')(app, modules);
require('./controllers/clientAdministration/setup/productCatalog.js')(app, modules);
require('./controllers/clientAdministration/setup/preview.js')(app, modules);
require('./controllers/clientAdministration/setup/published.js')(app, modules);

console.log("Server started at port 8000.");

app.listen(8000);
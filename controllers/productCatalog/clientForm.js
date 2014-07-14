module.exports = function(app, modules) {
	app.get('/clientForm', function(req, res) {
		res.render('productCatalog/clientForm.html');
	});

	app.get('/actions/submitClientInfo', function(req, res) {
		console.log('Submitting client info to the server.');
		var firstName = req.query.firstName;
		var lastName = req.query.lastName;
		var email = req.query.email;
		var departedName = req.query.departedName;
		
		var user ={ firstName: firstName, lastName: lastName, email: email, departedName: departedName };

		req.session.currentUser = user;
        req.session.selectedProducts = [];
        req.session.finishedSteps = [];

		// var user = new User({ firstName: firstName, lastName: lastName, email: email, departedName: departedName });
		// user.save(function (err) {
		// 	if (err) throw err;
		// 	console.log('Client info submitted.');
		// });
		res.send('good');
	});
}
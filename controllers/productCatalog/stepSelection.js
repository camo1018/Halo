module.exports = function(app, modules) {
    var section = '/productCatalog/';

	app.get(section + 'stepScreen', function(req, res) {
		res.render('productCatalog/stepScreen.html');
	});

	app.get(section + 'serviceSelect', function(req, res) {
		res.render('productCatalog/serviceSelect.html');
	});

	app.get('/actions' + section + 'selectTraditional', function(req, res) {
		console.log('Selecting traditional service for user ' + req.session.currentUser.firstName + ' ' + req.session.currentUser.lastName);
		req.session.serviceType = 'traditional';
		res.send('good');
	});

	app.get('/actions' + section + 'selectCremation', function(req, res) {
		console.log('Selecting cremation service for user ' + req.session.currentUser.firstName + ' ' + req.session.currentUser.lastName);
		req.session.serviceType = 'cremation';
		res.send('good');
	});

	// Get all information dependent on what type of service the user has chosen and what step the user is on.
	app.get('/actions' + section + 'getStepScreenInformation', function(req, res) {
		console.log('Retrieving service-specific information for step screen.');
		var serviceType = req.session.serviceType;
		// The current step the user is on.
		var serviceStep = req.session.serviceStep;

		if (serviceStep == null) {
			req.session.serviceStep = 1;
			serviceStep = 1;
		}

		var serviceSteps = [];

		modules.Async.series([
			function(callback) {
				modules.MongoDefinitions.ServiceStep.find({ serviceName: serviceType }).sort({ stepOrder: 1 }).exec(function(err, results) {
					for (var i = 0; i < results.length; i++) {
						serviceSteps.push(results[i]);
					}
					callback(null);
				});
			},
			function(callback) {
				var information = { serviceType: serviceType, currentServiceStep: serviceStep, serviceSteps: serviceSteps };
				res.json(information);
				callback(null);
			}		
		]);
	})

	// Select the specified step.
	app.get('/actions' + section + 'selectStep', function(req, res) {
		var stepOrder = req.query.stepOrder;
		
		console.log('Selecting a service order: ' + stepOrder);
		
		modules.MongoDefinitions.ServiceStep.findOne({ stepOrder: stepOrder }, function(err, result) {
			req.session.serviceStep = result.stepOrder;
			res.send('good');
		});
	});

    app.get('/actions' + section + 'getFinishedSteps', function(req, res) {
        var finishedSteps = req.session.finishedSteps;
        var serviceName = req.session.serviceType;

        console.log('Getting all the finished steps.');

        async.series([
            function(callback) {
                modules.MongoDefinitions.ServiceStep.find({ stepOrder: { $in : finishedSteps }, serviceName: serviceName}, function(err, results) {
                    res.json(results);
                    callback(null);
                });
            },
            function(callback) {
                console.log('Retrieved finished steps');
                callback(null);
            }
        ])
    });
}
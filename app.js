var express 	= require('express'),
	config 		= require('./config/config'),
	glob 		= require('glob'),
	mongoose 	= require('mongoose');

// Connect to Database
mongoose.connect(config.db);
var db = mongoose.connection;
	db.on('error', function () {
		throw new Error('unable to connect to database at ' + config.db);
	});

// Import MongoDB Data Models
var models = glob.sync(config.root + '/app/models/*.js');
	models.forEach(function (model) {
		require(model);
	});

// Init Express
var app = express();

// Config
require('./config/express')(app, config);

// Listen to Server Port
app.listen(config.port);
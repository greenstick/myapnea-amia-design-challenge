var express 	= require('express'),
	router 		= express.Router(),
	mongoose 	= require('mongoose'),
	Article 	= mongoose.model('Article');

module.exports = function (app) {
	app.use('/', router);
};

// Index Render
router.get('/', function (req, res, next) {
	res.render('jade/index', {
		title: 'Index'
	});
});

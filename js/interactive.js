(function () {

	var Interactive = function (config) {
		this.init(config);
	};

	/*
	Interactive Prototype

	@params: {
		parent 		(String)	: the parent HTML element (where the interactive lives on the web page),
		element 	(String) 	: the main HTML element for the interactive feature
		navigation 	(String) 	: the navigation HTML element
		loader 		(String) 	: the loader HTML element (i.e. this interactive is loading . . .)
		activeState (String) 	: the current state of the interactive (is it showing social data, user data, or something else?)
		loggedIn 	(Boolean) 	: is the site visitor a logged in user?
	}

	*/

	Interactive.prototype = {

		/*
		Core Routines
		*/

		//Initialize Interactive
		init: function (config) {
			var I = this;
				I.parent 		= config.parent,
				I.element 		= config.element,
				I.navigation	= config.navigation,
				I.loader		= config.loader,
				I.activeState 	= config.activeState,
				I.loggedIn 		= config.loggedIn,
				I.data;


		},

		update: function () {

		},

		/*
		Private Functions
		*/

		// Basic AJAX Request Function
		request: function (args, callback) {
			var I 				= this,
				type 			= args.type,
				route 			= args.route,
				data 			= args.data;
			$.ajax({
				type 			: type,
				route 			: route,
				dataType		: "json",
				data 			: data
			}).done(function (response) {
				I.data = response;
				console.log("XHR Notification: Request Success");
			}).fail(function () {
				console.log("XHR Notification: Request Fail");
				console.log(args)
			}).always(function () {
				console.log("XHR Notification: Request Complete");
				if (typeof callback === 'function') callback();
			});
		},

		// Open & Close Navigation
		toggleNavigation: function () {
			var I = this;
			$(I.navigation).toggleClass("active");
		}


	}
}(jQuery, ko, d3))
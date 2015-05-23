/*
Project: AMIA Student Design Challenge
Team Institution: Oregon Health & Science University
Client: MyApnea.org
File: interactive.js
*/

// (function () {

	/*
	Interactive Prototype

	@ params: {
		parent 		(String, optional)	: the parent HTML element (where the interactive lives on the web page),
		element 	(String, optional) 	: the main HTML element for the interactive feature
		navigation 	(String, optional) 	: the navigation HTML element
		loader 		(String, optional) 	: the loader HTML element (i.e. 'this interactive is loading. . .'')
		activeState (String, optional) 	: the current state of the interactive (is it showing social data, user data, or something else?)
		loggedIn 	(Boolean, optional) : is the site visitor a logged in user?
	}

	*/

	// Instantiation Function
	var Interactive = function (config) {
		this.init(config);
	};

	// Prototype
	Interactive.prototype = {

		/*
		Core Routines
		*/

		//Initialize Interactive
		init: function (config) {
			var I = this;
				I.parent 			= config.parent,			// Below are default values
				I.element 			= config.element 			|| '#interactive-wrapper',
				I.navigation		= config.navigation 		|| '#interactive-navigation',
				I.loader			= config.loader				|| '#interactive-loader',
				I.moduleParent 		= config.moduleParent 		|| '#interactive-modules',
				I.moduleElement 	= config.moduleElement 		|| '.module',
				I.activeState 		= config.activeState 		|| 'default',
				I.loggedIn 			= config.loggedIn 			|| false,
				I.defaultPredictor 	= config.defaultPredictor 	|| "date",
				I.defaultOutcome 	= config.defaultOutcome 	|| "cpapHrs",
				I.surveySchema 		= window.surveyschema,
				I.dials 			= {},
				I.utilities 		= new Utilities({}),
				I.generator 		= new Generate({}),
				I.surveyData 		= I.generator.generateSurveyData(I.surveySchema, 200),
				I.userData 			= I.generator.generateUserData(200),
				I.socialData 		= I.generator.generateSocialData(200, 200),
				I.initDials();
				console.log(I.surveyData);
				console.log(I.userData);
				console.log(I.socialData);
			return I;
		},

		/*
		Utility Methods
		*/

		commaNumbers: function (number) {
	        var str = number.toString().split('.');
	        if (str[0].length >= 4) {
	            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	        }; 
	        if (str[1] && str[1].length >= 5) {
	            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
	        };
	        return str.join('.');
    	},

		/*
		User Interface Methods
		*/

		initDials: function () {
			var I = this;
			$('.dial').each(function (i, e) {
				var id 			= I.generator.generateUUID();
				$(e).attr('id', id);
				var instance	= '#UUID-' + id,
					display 	= instance + ' .percent',
					dial 		= new Dial({
						id 			: instance,
						display 	: display
					});
					I.dials[id] = dial;
			});
		},



		updateDials: function (array) {
			var I = this;
			$.each('.dials', function (i, e) {
				var id 		= $(e).attr("id"),
					random 	= array[i];
				I.dials[id].update(random);
			});
		},

		/*
		Graph Methods
		*/

		


	};

var config = {
	parent: 'body'
};

var interactive = new Interactive(config);

// }(jQuery, ko, d3))
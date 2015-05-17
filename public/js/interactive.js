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
				I.parent 			= config.parent,		// Below are default values
				I.element 			= config.element 		|| '#interactive-wrapper',
				I.navigation		= config.navigation 	|| '#interactive-navigation',
				I.loader			= config.loader			|| '#interactive-loader',
				I.moduleParent 		= config.moduleParent 	|| '#interactive-modules',
				I.moduleElement 	= config.moduleElement 	|| '.module',
				I.activeState 		= config.activeState 	|| 'default',
				I.loggedIn 			= config.loggedIn 		|| false,
				I.surveySchema 		= window.surveyschemas,
				I.dials 			= {},
				I.utilities 		= new Utilities({}),
				I.surveyData 		= I.generateSampleData(I.surveySchema, 200);
				I.initDials();
			return I;
		},

		update: function (state) {
			var I = this;
				I.activeState 	= state;
		},

		/*
		Utility Methods
		*/

		// Basic AJAX Request Function
		request: function (args, callback) {
			var I 				= this,
				key 			= args.key,
				type 			= args.type,
				route 			= args.route,
				data 			= args.data;
			$.ajax({
				type 			: type,
				url 			: route,
				dataType		: "json",
				data 			: data
			}).done(function (response) {
				I.data[key] = response;
				console.log("XHR Notification: Request Success");
			}).fail(function () {
				console.log("XHR Notification: Request Fail");
				console.log(args);
			}).always(function () {
				console.log("XHR Notification: Request Complete");
				if (typeof callback === 'function') callback();
			});
		},

		generateSampleData: function (data, count) {
			var surveyData 		= [];
			for (var i = 0; i < data.length; i++) {
				var survey 	= data[i],
					title 	= data[i].title;
				for (var j = 0; j < count; j++) {
					var submission 	= {
						title 		: survey.title,
						responses 	: []
					};
					for (var k = 0; k < survey.questions.length; k++) {
						var random 		= Math.random(),
							index 		= Math.floor(random * survey.questions[k].options.length),
							response 	= {},
							answer;
						if (survey.questions[k].validation.hasOwnProperty("type")) {
							var value 		= survey.questions[k].validation,
								answerTypes = {
									Datetime 	: function () {
										return new Date();
									},
									Height 		: function () {
										return Math.random() * 108;
									},
									Weight 		: function () {
										return Math.random() * 400;
									},
									Hours 		: function () {
										return Math.random() * 12;
									}
								},
								answer 		= answerTypes[value.type](),
								response 	= {
									number 		: survey.questions[k].number,
									question 	: survey.questions[k].question,
									answer 		: answer,
									answercode 	: null
								};
						} else {
							answer 		= survey.questions[k].options[index],
							response 	= {
								number 		: survey.questions[k].number,
								question 	: survey.questions[k].question,
								answer 		: answer,
								answercode 	: index
							};
						}
						submission.responses.push(response);
					}
					surveyData.push(submission);
				}
			}
			// console.log(surveyData);
			return surveyData;
		},

		/*
		User Interface Methods
		*/

		// Open & Close Navigation
		toggleNavigation: function () {
			var I = this;
			$(I.navigation).toggleClass("active");
		},

		initDials: function () {
			var I = this;
			$('.dial').each(function (i, e) {
				var id 			= I.utilities.generateUUID();
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

		updateDials: function (arr) {
			var I = this;
			$.each('.dials', function (i, e) {
				var id 		= $(e).attr("id"),
					random 	= arr[i];
				I.dials[id].update(random);
			});
		}


	};

var config = {
	parent: 'body'
};

var interactive = new Interactive(config);

// }(jQuery, ko, d3))
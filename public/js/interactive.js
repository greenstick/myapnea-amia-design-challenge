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
				// General Config Vars
				I.parent 			= config.parent,					// Below are default values
				I.element 			= config.element 					|| '#interactive-wrapper',
				I.navigation		= config.navigation 				|| '#interactive-navigation',
				I.loader			= config.loader						|| '#interactive-loader',
				I.moduleParent 		= config.moduleParent 				|| '#interactive-modules',
				I.moduleElement 	= config.moduleElement 				|| '.module',
				I.activeState 		= config.activeState 				|| 'default',
				I.loggedIn 			= config.loggedIn 					|| false,
				I.graphConfig 		= config.graphConfig,
				I.surveySchema 		= window.surveySchema,
				I.dials 			= {},
				I.graph,
				// View Model Vars
				I.dataSources 		= ko.observable(config.dataSources),
				I.timeFilters 		= ko.observable(config.timeFilters),
				I.dataFiltersA 		= ko.observable(config.dataFiltersA),
				I.dataFiltersB 		= ko.observable(config.dataFiltersB),
				I.selectedData 		= ko.observable(config.dataSources[0].key),
				I.selectedTime 		= ko.observable(config.timeFilters[0].key),
				I.selectedFilterA 	= ko.observable(config.dataFiltersA[0].key),
				I.selectedFilterB 	= ko.observable(config.dataFiltersB[0].key),
				// Bind Child Prototypes
				I.utils 			= new Utilities({}),
				I.gen 				= new Generate({}),
				// Generate Data
				I.surveyData 		= I.gen.generateSurveyData(I.surveySchema, 20),
				I.userData 			= I.gen.generateUserData(20),
				// I.socialData 		= I.gen.generateSocialData(20, 20),
				I.initDials();
				// console.log(I.surveyData);
				// console.log(I.userData);
				// console.log(I.socialData);
			return I;
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
		Bindings
		*/

		setData: function (event, data) {
			var I = this;
			I.selectedData(event.target.value);
			I.genScatterPlot();
		},

		setTime: function (event, data) {
			var I = this;
			I.selectedTime(event.target.value);
			I.genScatterPlot();
		},

		setFilterA: function (event, data) {
			var I = this;
			I.selectedFilterA(event.target.value);
			I.genScatterPlot();
		},

		setFilterB: function (event, data) {
			var I = this;
			I.selectedFilterB(event.target.value);
			I.genScatterPlot();
		},

		/*
		Graph Methods
		*/

		genScatterPlot: function () {
			var I = this,
				type = {
					userData: function () {
						var data = [];
						for (var i = 0; i < I.userData.responses.length; i++) {
							var responseSet = I.userData.responses[i], x, y1, y2, userData = {};
							for (var j = 0; j < responseSet.length; j++) {
								var response = responseSet[j];
								if (response.key === I.selectedTime()) 		userData["x"] 		= response.value;
								if (response.key === I.selectedFilterA()) 	userData["y1"] 		= response.value;
								if (response.key === I.selectedFilterB()) 	userData["y2"] 		= response.value;
								if (response.key === "datetime") 			userData["date"] 	= response.value;
								data.push(userData);
							}
						}
						console.log(data);
						I.graph = new Scatterplot(I.graphConfig, data);
						return I.graph;
					},
					socialData: function () {
						var data = [];
						for (var i = 0; i < I.socialData.length; i++) {
							var user = I.socialData[i], userData = {};
							for (var j = 0; j < user.responses.length; j++) {
								var responseSet = user.responses[j], x, y1, y2;
								for (var k = 0; k < responseSet.length; k++) {
									var response = responseSet[k];
									if (response.key === I.selectedTime()) 		userData["x"] 		= response.value;
									if (response.key === I.selectedFilterA()) 	userData["y1"] 		= response.value;
									if (response.key === I.selectedFilterB()) 	userData["y2"] 		= response.value;
									if (response.key === "datetime") 			userData["date"] 	= response.value;
									data.push(userData);
								}
							}
						}
						data = data.sort(function (a, b) {
							return new Date(a.date) - new Date (b.date);
						});
						for (var i = 0; i < data.length; i++) {

						}
						I.graph = new Scatterplot(I.graphConfig, data);
						return I.graph;
					},
					surveyData: function () {
						var data = [];
						for (var i = 0; i < I.surveyData.length; i++) {
							var x 	= I.surveyData[i].responses[I.selectedTime()],
								y1 	= I.surveyData[i].responses[I.selectedFilterA()],
								y2 	= I.surveyData[i].responses[I.selectedFilterB()],
								arr = [x, y1, y2];
								data.push(arr);
						}
						I.graph = new Scatterplot(I.graphConfig, data);
						return I.graph;
					}
				};
			// try {
				type[I.selectedData()]();
			// } catch (e) {
				console.log("Error Rendering Plot!");
				console.log("Data: " + I.selectedData());
				console.log("Time: " + I.selectedTime());
				console.log("FilterA: " + I.selectedFilterA());
				console.log("FilterB: " + I.selectedFilterB())
				// return I.graph;
			// }
		}


	};

var config = {
	parent 			: 'body',
	dataSources 	: [{key: "userData", name: "My Data"}, {key: "socialData", name: "Our Data"}],
	timeFilters 	: [{key: "cpap", name: "CPAP Hours per Night"}, {key: "date", name: "Date"}],
	dataFiltersA 	: [{key: "sleepQuality", name: "Sleep Quality"}, {key: "height", name: "Height (in)"}, {key: "weight", name: "Weight (lbs)"}, {key: "bmi", name: "Body Mass Index (BMI)"}, {key: "bloodPressure", name: "Blood Pressure (mm/Hg)"}, {key: "heartRate", name: "Heart Rate (BPM)"}, {key: "sleepiness", name: "Daytime Sleepiness"}, {key: "arousalCount", name: "Night Time Arousals"}],
	dataFiltersB 	: [{key: "sleepQuality", name: "Sleep Quality"}, {key: "height", name: "Height (in)"}, {key: "weight", name: "Weight (lbs)"}, {key: "bmi", name: "Body Mass Index (BMI)"}, {key: "bloodPressure", name: "Blood Pressure (mm/Hg)"}, {key: "heartRate", name: "Heart Rate (BPM)"}, {key: "sleepiness", name: "Daytime Sleepiness"}, {key: "arousalCount", name: "Night Time Arousals"}],
	graphConfig 	: {
		parent 			: ".module.visualization",
		target 			: ".graph",
		width 			: 560,
		height 			: 488,
		margin 			: {
			top 			: 20,
			right 			: 20,
			bottom 			: 20,
			left 			: 20
		}
	}
};

var interactive = new Interactive(config);
	interactive.genScatterPlot();
	ko.applyBindings(interactive, document.querySelector(".visualization"));

// }(jQuery, ko, d3))
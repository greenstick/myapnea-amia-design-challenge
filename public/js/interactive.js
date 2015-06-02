/*
Project: AMIA Student Design Challenge
Team Institution: Oregon Health & Science University
Submission Team: Choi, A., Cordier, B., Das, P., Li, J.
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
				I.parent 			= config.parent						|| 'body',
				I.element 			= config.element 					|| '#interactive-wrapper',
				I.navigation		= config.navigation 				|| '#interactive-navigation',
				I.loader			= config.loader						|| '#interactive-loader',
				I.moduleParent 		= config.moduleParent 				|| '#interactive-modules',
				I.moduleElement 	= config.moduleElement 				|| '.module',
				I.activeState 		= config.activeState 				|| 'default',
				I.loggedIn 			= config.loggedIn 					|| false,
				I.graphConfig 		= config.graphConfig,
				I.surveySchema 		= window.surveySchema,
				I.badgeSchema 		= window.badgeSchema,
				I.dials 			= {},
				I.graph,
				I.activeData,
				// View Model Vars
				I.dataSources 		= ko.observable(config.dataSources),
				I.timeFilters 		= ko.observable(config.timeFilters),
				I.dataFiltersA 		= ko.observable(config.dataFiltersA),
				I.dataFiltersB 		= ko.observable(config.dataFiltersB),
				I.selectedData 		= ko.observable(config.dataSources[0].key),
				I.selectedTime 		= ko.observable(config.timeFilters[0].key),
				I.selectedFilterA 	= ko.observable(config.dataFiltersA[0].key),
				I.selectedFilterB 	= ko.observable(config.dataFiltersB[0].key),
				I.badges 			= ko.observableArray(I.badgeSchema),
				I.hoveredBadge 		= ko.observable(I.badgeSchema[0])
				// Bind Child Prototypes
				I.utils 			= new Utilities({}),
				I.gen 				= new Generate({}),
				// Generate Data
				I.surveyData 		= I.gen.generateSurveyData(I.surveySchema, 20);
				I.userData 			= I.gen.generateUserData(20);
				I.socialData 		= I.gen.generateSocialData(20, 20);
				// console.log(I.surveyData);
				// console.log(I.userData);
				// console.log(I.socialData);
				console.log(I.badges());
			return I;
		},
		
		/*
		User Interface Methods
		*/



		/*
		Bindings
		*/

		setData: function (event, data) {
			var I = this;
			I.selectedData(event.target.value);
			I.updatePlotData(event.target.value);
		},

		setTime: function (event, data) {
			var I = this;
			I.selectedTime(event.target.value);
			I.updatePlotX(event.target.value);
		},

		setFilterA: function (event, data) {
			var I = this;
			I.selectedFilterA(event.target.value);
			I.updatePlotY(event.target.value, false);
		},

		setFilterB: function (event, data) {
			var I = this;
			I.selectedFilterB(event.target.value);
			I.updatePlotY(event.target.value, true);
		},

		/*
		Graph Methods
		*/

		genLinePlot: function () {
			var I = this,
				type = {
					userData: function () {
						I.activeData = I.userData;
						var data = [], rangeX = [], rangeY = [], rangeDate = [];
						for (var i = 0; i < I.activeData.responses.length; i++) {
							var responseSet = I.activeData.responses[i], x, y1, y2, userData = {};
							for (var j = 0; j < responseSet.length; j++) {
								var response = responseSet[j];
								if (response.key === I.selectedTime()) 		userData["x"] 		= response.value;
								if (response.key === I.selectedFilterA()) 	userData["y1"] 		= response.value;
								if (response.key === I.selectedFilterB()) 	userData["y2"] 		= response.value;
								if (response.key === "datetime") 			userData["date"] 	= response.value;
								data.push(userData);
							}
						}
						for (var i = 0; i < data.length; i++) {
							rangeX.push(data[i].x);
							rangeY.push(data[i].y1, data[i].y2);
							rangeDate.push(data[i].date);
						}
						data = data.sort(function (a, b) {
							return new Date(a.date) - new Date (b.date);
						});
						I.graphConfig["xMax"] = Math.max.apply(null, rangeX);
						I.graphConfig["xMin"] = Math.min.apply(null, rangeX);
						I.graphConfig["yMax"] = Math.max.apply(null, rangeY);
						I.graphConfig["yMin"] = Math.min.apply(null, rangeY);
						I.graph = new Lineplot(I.graphConfig, data);
						console.log(data);
						return I.graph;
					},
					socialData: function () {
						var data = [];
						I.activeData = I.socialData;
						for (var i = 0; i < I.activeData.length; i++) {
							var user = I.activeData[i], userData = {};
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
						console.log("meow")
						// for (var i = 0; i < data.length; i++) {
						// 	console.log(data[i]);
						// }
						I.graph = new Lineplot(I.graphConfig, data);
						return I.graph;
					},
					surveyData: function () {
						var data = [];
						I.activeData = I.surveyData;
						for (var i = 0; i < I.activeData.length; i++) {
							var x 	= I.surveyData[i].responses[I.selectedTime()],
								y1 	= I.surveyData[i].responses[I.selectedFilterA()],
								y2 	= I.surveyData[i].responses[I.selectedFilterB()],
								arr = [x, y1, y2];
								data.push(arr);
						}
						I.graph = new Lineplot(I.graphConfig, data);
						return I.graph;
					}
				};
			try {
				type[I.selectedData()]();
			} catch (e) {
				console.log("Error Rendering Plot!");
				console.debug(e);
				return I.graph;
			}
		},

		updatePlotData: function (key) {
			var I = this,
				type = {
					userData: function () {
						var data = [], rangeX = [], rangeY = [], rangeDate = [];
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
						for (var i = 0; i < data.length; i++) {
							rangeX.push(data[i].x);
							rangeY.push(data[i].y1, data[i].y2);
							rangeDate.push(data[i].date);
						}
						data = data.sort(function (a, b) {
							return new Date(a.date) - new Date (b.date);
						});
						I.graphConfig["xMax"] = Math.max.apply(null, rangeX);
						I.graphConfig["xMin"] = Math.min.apply(null, rangeX);
						I.graphConfig["yMax"] = Math.max.apply(null, rangeY);
						I.graphConfig["yMin"] = Math.min.apply(null, rangeY);
						I.graph = I.graph.update(data);
						return I.graph;
					},
					socialData: function () {
						var data = [];
						console.log(I.socialData);
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
						console.log("meow")
						// for (var i = 0; i < data.length; i++) {
						// 	console.log(data[i]);
						// }
						I.graph = I.graph.update(data);
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
						I.graph = I.graph.update(data);
						return I.graph;
					}
				};
			// try {
				type[I.selectedData()]();
			// } catch (e) {
				// console.log("Error Rendering Plot!");
				// console.log("Data: " + I.selectedData());
				// console.log("Time: " + I.selectedTime());
				// console.log("FilterA: " + I.selectedFilterA());
				// console.log("FilterB: " + I.selectedFilterB())
				// return I.graph;
			// }
		},

		updatePlotX: function (key) {

		},

		updatePlotY: function (key, filterA) {

		},

		hoverBadge: function (data) {
			var I = this;
			I.hoveredBadge(data);
		},
		showValue: function (data) {
			var parent = $(data).offsetParent()[0].id
			$('#' + parent + ' .slider-value').html(data.value);
		}

	};

var config = {
	parent 			: 'body',
	dataSources 	: [
		{
			key: "userData", 
			name: "My Data"
		}, 
		{
			key: "socialData", 
			name: "Our Data"
		}
	],
	timeFilters 	: [
		{
			key: "date", 
			name: "Date"
		}, 
		{
			key: "cpap", 
			name: "CPAP Hours per Night"
		}
	],
	dataFiltersA 	: [
		{
			key: "bmi", 
			name: "Body Mass Index (BMI)"
		}, 
		{
			key: "sleepQuality", 
			name: "Sleep Quality"
		}, 
		{
			key: "height", 
			name: "Height (in)"
		}, 
		{
			key: "weight", 
			name: "Weight (lbs)"
		}, 
		{
			key: "bloodPressure", 
			name: "Blood Pressure (mm/Hg)"
		}, 
		{
			key: "heartRate", 
			name: "Heart Rate (BPM)"
		}, 
		{
			key: "sleepiness", 
			name: "Daytime Sleepiness"
		}, 
		{
			key: "arousalCount", 
			name: "Night Time Arousals"
		}
	],
	dataFiltersB 	: [
		{
			key: "weight", 
			name: "Weight (lbs)"
		}, 
		{
			key: "sleepQuality", 
			name: "Sleep Quality"
		}, 
		{
			key: "height", 
			name: "Height (in)"
		}, 
		{
			key: "bmi", 
			name: "Body Mass Index (BMI)"
		}, 
		{
			key: "bloodPressure", 
			name: "Blood Pressure (mm/Hg)"
		}, 
		{
			key: "heartRate", 
			name: "Heart Rate (BPM)"
		}, 
		{
			key: "sleepiness", 
			name: "Daytime Sleepiness"
		}, 
		{
			key: "arousalCount", 
			name: "Night Time Arousals"
		}
	],
	graphConfig 	: {
		parent 			: ".module.visualization",
		target 			: ".graph",
		width 			: 560,
		height 			: 424,
		margin 			: {
			top 			: 40,
			right 			: 40,
			bottom 			: 40,
			left 			: 40
		},
		data 			: [],
		xMax 			: null,
		xMin 			: null,
		yMax 			: null,
		yMin 			: null,
		dateMax 		: null,
		dateMin 		: null
	}
};

var interactive = new Interactive(config);
	interactive.genLinePlot();
	ko.applyBindings(interactive, document.getElementById("interactive-wrapper"));

// }(jQuery, ko, d3))
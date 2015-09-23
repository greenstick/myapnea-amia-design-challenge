/*
Project: AMIA Student Design Challenge
Team Institution: Oregon Health & Science University
Author: Cordier, B.
Submission Team: Choi, A., Cordier, B., Das, P., Li, J.
Client: MyApnea.org
File: interactive.js
*/

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
		return this.init(config);
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
				I.parent 			= typeof config.parent 			=== 'string' ? config.parent 		: 'body',
				I.element 			= typeof config.element 		=== 'string' ? config.element 		: '#interactive-wrapper',
				I.moduleParent 		= typeof config.moduleParent 	=== 'string' ? config.moduleParent	: '#interactive-modules',
				I.moduleElement 	= typeof config.moduleElement 	=== 'string' ? config.moduleElement : '.module',
				I.graph 			= typeof config.graph 			=== 'object' ? config.graph 		: undefined,
				// Import Data
				I.surveySchema 		= window.surveySchema,
				I.badgeSchema 		= window.badgeSchema,
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
				I.gen 				= new Generate({}),
				// Generate Data
				I.userData 			= I.gen.generateUserData(30, 1),
				I.socialData 		= I.gen.generateSocialData(30, 30, 1),
				I.chartDataA 		= [I.userData[0], I.userData[1], I.userData[2], I.userData[3], I.userData[4], I.userData[5], I.userData[6]],
				I.chartDataB 		= [I.userData[0], I.userData[7], I.userData[8], I.userData[9]],
				I.chartA 			= c3.generate({
					bindto: I.graph.targetA,
				    data: {
				        xs: {
				            weight 		: 'datetime',
				            bmi 		: 'datetime',
				            cpaphrs 	: 'datetime',
				            heartrate 	: 'datetime',
				            sbp 		: 'datetime',
				            dbp 		: 'datetime'
				        },
				        columns: I.chartDataA,
				        type: 'timeseries',
				        types: {
				            weight 		: 'line',
				            bmi 		: 'line',
				            cpaphrs 	: 'bar',
				            heartrate 	: 'line',
				            sbp 		: 'line',
				            dbp 		: 'line'
				        },
				    },
				    bar: {
					  width: 20
					},
				    axis: {
				        x: {
				        	type: 'timeseries',
				            tick: {
				                fit: true,
				                format: '%m/%d/%Y',
				            	count: 6
				            }
				        },
				        y: {
				            tick: {
				            	fit: true
				            }
				        }
				    },
				    tooltip: {
				    	format: {
				    		title: function (date) {return date.toString().substring(0, 15)},
				    		name: function (name) {
				    			var formats = {
				    				weight: function () {
				    					return "Weight";
				    				},
				    				bmi: function () {
				    					return "Body Mass Index";
				    				},
				    				cpaphrs: function () {
				    					return "CPAP Usage";
				    				},
				    				heartrate: function () {
				    					return "Heart Rate";
				    				},
				    				spb: function () {
				    					return "Systolic Blood Pressure";
				    				},
				    				dbp: function () {
				    					return "Diastolic Blood Pressure";
				    				}
				    			}
				    			return formats[name]();
				    		},
				            value: function (value, ratio, id) {
				            	var formats = {
				            		weight: function (value) {
				            			return value + " Lbs";
				            		},
				            		bmi: function (value) {
				            			return value
				            		},
				            		cpaphrs: function (value) {
				            			return value + " Hrs";
				            		},
				            		heartrate: function (value) {
				            			return value + "BPM"
				            		},
				            		sbp: function (value) {
				            			return value + " mm/Hg";
				            		},
				            		dbp: function (value) {
				            			return value + " mm/Hg";
				            		}
				            	}
				            	return formats[id](value);
				            }
				    	}
				    },
				    legend: {
				    	position: 'right'
				    },
				    zoom: {
				    	enabled: true
				    }
				});
			I.chartB 			= c3.generate({
					bindto: I.graph.targetB,
				    data: {
				        xs: {
				            sleepiness 	: 'datetime',
				            sleepquality: 'datetime',
				            arousalcount: 'datetime'
				        },
				        columns: I.chartDataB,
				        type: 'timeseries',
				        types: {
				            sleepiness 	: 'line',
				            sleepquality: 'line',
				            arousalcount: 'line'
				        },
				    },
				    axis: {
				        x: {
				        	type: 'timeseries',
				            tick: {
				                fit: true,
				                format: '%m/%d/%Y',
				            	count: 6
				            }
				        },
				        y: {
				            tick: {
				            	fit: true
				            }
				        }
				    },
				    tooltip: {
				    	format: {
				    		title: function (date) {return date.toString().substring(0, 15)},
				    		name: function (name) {
				    			var formats = {
				    				sleepiness: function () {
				    					return "Daytime Sleepiness (1 - 10)";
				    				},
				    				sleepquality: function () {
				    					return "Sleep Quality (1 - 10)";
				    				},
				    				arousalcount: function () {
				    					return "Nighttime Arousals";
				    				}
				    			}
				    			return formats[name]();
				    		}
				    	}
				    },
				    legend: {
				    	position: 'right'
				    },
				    zoom: {
				    	enabled: true
				    }
				});
			I.chartA.hide(['weight', 'bmi', 'heartrate', 'sbp', 'dbp']);
			I.chartB.hide(['sleepiness', 'arousalcount']);
			console.log(I.userData);
			return I;
		},
		
		/*
		Graph Methods
		*/

		updateChart: function (key) {
			var I = this;

			return I;
		},

		/*
		Data Visualization Selection Bindings
		*/

		setData: function (event, data) {
			var I = this;
			I.selectedData(event.target.value);
			I.updateChart();
			return I;
		},

		setTime: function (event, data) {
			var I = this;
			I.selectedTime();
			I.updateChart();
			return I;
		},

		setFilterA: function (event, data) {
			var I = this;
			I.selectedFilterA(event.target.value);
			I.updateChart();
			return I;
		},

		setFilterB: function (event, data) {
			var I = this;
			I.selectedFilterB(event.target.value);
			I.updateChart();
			return I;
		},

		/*
		Interface Methods
		*/

		// Gamification Module: Show Information About Badge Being Hovered
		hoverBadge: function (data, event) {
			var I = this;
			I.hoveredBadge(data, event);
			return I;
		},

		// Input Module: Show Selected Slider Value
		showValue: function (data, event) {
			var parent = $(data).offsetParent()[0].id
			$('#' + parent + ' .slider-value').html(data.value);
		}

	};

// Interactive Config Arguments
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
		},
		{
			key: "surveyData", 
			name: "Survey Data"
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
			key: "weight", 
			name: "Weight (lbs)"
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
			key: "arousalCount", 
			name: "Night Time Arousals"
		}
	],
	dataFiltersB 	: [
		{
			key: "sleepQuality", 
			name: "Sleep Quality"
		},
		{
			key: "sleepiness", 
			name: "Daytime Sleepiness"
		}
	],
	graph 			: {
		targetA 		: ".graph-a",
		targetB 		: ".graph-b",
		width 			: 980,
		height 			: 216,
		margin 			: {
			top 			: 8,
			right 			: 8,
			bottom 			: 20,
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

// Instatiate & Bind ViewModel
var interactive = new Interactive(config);
ko.applyBindings(interactive, document.getElementById("interactive-wrapper"));
/*
Project: AMIA Student Design Challenge
Team Institution: Oregon Health & Science University
Client: MyApnea.org
File: interactive.js
*/

(function () {

	/*
	Dial Prototype

	@ params: {
		id 			(String, required)	: HTML element ID of the dial
		display 	(String, required) 	: HTML ellement class of the display
		value 		(Number, optional)	: default dial value
		innerRadius (Number, optional) 	: inner width of the dial SVG element
		outerRadius (Number, optional) 	: outer width of the dial SVG element; the inner width - the outer width makes the width of the arc
		startAngle 	(Number, optional)  : start angle of the dial, typically should be 0
		duration 	(Number, optional) 	: duration of the interpolations
		easing 		(String, optional)	: examples include 'linear', 'easeOutCirc', etc.
	}

	*/

	// Instantiation Function
	var Dial = function (config) {
		this.init(config);
	};

	// Prototype
	Dial.prototype = {

		/*
		Core Routines
		*/

		init: function (config) {
			var dial = this;
				dial.id 			= args.id,
				dial.display 		= args.display,
				dial.value 			= args.value 			|| 0,
				dial.innerRadius	= args.innerRadius 		|| 30,
				dial.outerRadius	= args.outerRadius 		|| 45,
				dial.startAngle 	= args.startAngle 		|| 0,
				dial.duration 		= args.duration 		|| 600,
				dial.easing 		= args.easing 			|| 'linear',
				dial.history 		= 0,

				dial.arcDims 		= d3.svg.arc()
					.innerRadius(dial.innerRadius)
					.outerRadius(dial.outerRadius)
					.startAngle((dial.startAngle * 360) * (Math.PI/180)),
				
				dial.arc 			= d3.select(dial.id + ' svg g')
					.append('path')
					.datum({endAngle: 0})
					.attr('class', 'arc')
					.attr('d', arc)
					.attr('transform', 'translate(46.5, 46.5)');

				// Dial it up!
				dial.interpolateArc(dial.value);
				dial.interpolateText(dial.value, function () {
					$(dial.id + ' .percent').text(dial.value * 100);
				});
		},

		// Update the Dial
		update: function (values, callback) {
			var dial = this;
				dial.interpolateArc(value);
				dial.interpolateText(value, function () {
					$(dial.id + ' .percent').text(value * 100);
				});
			if (typeof callback == 'function') callback();
		},

		/*
		Dial Utility Functions
		*/

		// Interpolate the Text Value From the Current to the Target
		interpolateText: function (end, duration, callback) {
			var dial = this;
			d3.select(dial.element + '. percent')
				.transition()
				.duration(dial.duration)
				.ease(dial.easing)
				.tween('text', function () {
					var interpolation = d3.interpolate(dial.history, end);
					return function (t) {
						this.textContent = ((interpolation(t)) * 100).toFixed(1) + "%";
					};
				});
			if (typeof callback == 'function') callback();
		},

		// Interpolate the Arc
		interpolateArc: function (end, arc, callback) {
			var dial = this,
				value = end * 7.2,
				tween = function (transition, newAngle) {
					transition.attrTween('d', function (d) {
						var interpolation = d3.interpolate(dial.history, end);
						return function (t) {
							d.endAngle = interpolate(t);
							return dial.arcDimensions(d);
						};
					});
				};
			// Call Arc Transition
			dial.arc.transition()
				.duration(dial.duration)
				.call(tween, ((value * 100) * Math.PI/180));
			if (typeof callback == 'function') callback();
		}
	};

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
				I.activeState 		= config.activeState 	|| 'default',
				I.loggedIn 			= config.loggedIn 		|| false,
				I.data 				= I.request({
					type 			: 'GET',
					route 			: '',
					data 			: '' 
				});
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
				console.log(args);
			}).always(function () {
				console.log("XHR Notification: Request Complete");
				if (typeof callback === 'function') callback();
			});
		},

		// Generate a Unique Identifier - Used to uniquely access visualization modules
		generateUUID: function () {
		 	var d 		= new Date().now,
		    	uuid 	= 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        	var r = (d + Math.random()*16)%16 | 0;
		        	d = Math.floor(d/16);
		        	return (c == 'x' ? r : (r&0x7|0x8)).toString(16);
		    	});
		    return uuid;
		},

		/*
		User Interface Methods
		*/

		// Open & Close Navigation
		toggleNavigation: function () {
			var I = this;
			$(I.navigation).toggleClass("active");
		}


	};
}(jQuery, ko, d3))
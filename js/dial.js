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
				dial.id 			= config.id,
				dial.display 		= config.display,
				dial.value 			= config.value 				|| 0.5,
				dial.innerRadius	= config.innerRadius 		|| 30,
				dial.outerRadius	= config.outerRadius 		|| 45.5,
				dial.startAngle 	= config.startAngle 		|| 0,
				dial.duration 		= config.duration 			|| 600,
				dial.easing 		= config.easing 			|| 'linear',
				dial.history 		= 0,

				dial.arcDims 		= d3.svg.arc()
					.innerRadius(dial.innerRadius)
					.outerRadius(dial.outerRadius)
					.startAngle((dial.startAngle * 360) * (Math.PI/180));
				
				dial.arc 			= d3.select(dial.id + ' svg g')
					.append('path')
					.datum({endAngle: 0})
					.attr('class', 'arc')
					.attr('d', dial.arcDims)
					.attr('transform', 'translate(46.5, 46.5)');

				// Dial it up!
				dial.interpolateArc(dial.value);
				dial.interpolateText(dial.value, function () {
					$(dial.id + ' .percent').text(dial.value * 100);
				});
		},

		// Update the Dial
		update: function (value, callback) {
			var dial = this;
				dial.interpolateArc(value, dial.arc);
				dial.interpolateText(value, function () {
					$(dial.id + ' .percent').text(value * 100);
				});
				dial.history = value;
			if (typeof callback == 'function') callback();
		},

		/*
		Dial Utility Functions
		*/

		// Interpolate the Text Value From the Current to the Target
		interpolateText: function (end, callback) {
			var dial = this;
			d3.select(dial.id + ' .percent')
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
		interpolateArc: function (end, callback) {
			var dial = this,
				value = end * 7.2,
				tween = function (transition, newAngle) {
					transition.attrTween('d', function (d) {
						var interpolation = d3.interpolate(dial.history, end);
						return function (t) {
							d.endAngle = interpolation(t);
							return dial.arcDims(d);
						};
					});
				};
			// Call Arc Transition
			dial.arc.transition()
				.duration(dial.duration)
				.call(tween, ((value * 100) * Math.PI/180));

			console.log(dial.arc);
			if (typeof callback == 'function') callback();
		}
	};

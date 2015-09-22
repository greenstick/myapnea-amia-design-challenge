var Plots = function (config) {
	return typeof config === 'object' ? this.__init__(config) : console.log("Error: Plots module requires object argument.");
};

Plots.prototype = {

/*
Core Methods
*/

	// Initialize Prototype
	__init__ 		: function () {
		var plot 			= this;
			plot.element 	= typeof config.element === 'string' ? config.element : '#chart svg';
	},

/*
Plot Generating Methods
*/

	// Line Plot
	line 			: function (data, args) {
		var plot 			= this;
		nv.addGraph(function () {
			var data 		= typeof data 			=== 'undefined' ? plot.testData("line") 		: data,
				args 		= typeof args 			=== 'undefined' ? {} 							: args,
				format 		= typeof args.format 	=== 'undefined' ? {xTick: ',f', yTick: ',.2f'}	: args.format,
				duration 	= typeof args.duration 	=== 'undefined' ? 500 							: args.duration,
				chart 		= nv.models.lineWithFocusChart();
				// Format Chart Ticks
				chart.xAxis.tickFormat(d3.format(format.xTick));
				chart.yAxis.tickFormat(d3.format(format.yTick));
				chart.y2Axis.tickFormat(d3.format(format.yTick));
			d3.select(plot.element)
				.datum(data)
				.transition()
				.duration(duration)
				.call(chart);
			// Chart Resizing
			nv.utils.windowResize(chart.update);
			return chart;
		});
	},

	// Scatter Plot
	scatter 		: function (data, args) {
		nv.addGraph(function () {
			var data 		= typeof data 			=== 'undefined' ? plot.testData("scatter", {groups: 4, points: 40}) : data,
				args 		= typeof args 			=== 'undefined' ? {} 												: args,
				format 		= typeof args.format 	=== 'undefined' ? {xTick: '.02f', yTick: '.02f'}					: args.format,
				duration 	= typeof duration 		=== 'undefined' ? 350 												: args.duration,
				chart 		= nv.models.scatterChart()
					//showDist, when true, will display those little distribution lines on the axis.
					.showDistX(true)
					.showDistY(true)
					.transitionDuration(duration)
					.color(d3.scale.category10().range());
				//Configure how the tooltip looks.
				chart.tooltipContent(function (key) {
					return '<h3>' + key + '</h3>';
				});
				//Axis settings
				chart.xAxis.tickFormat(d3.format(format.xTick));
				chart.yAxis.tickFormat(d3.format(format.yTick));
				//We want to show shapes other than circles.
				chart.scatter.onlyCircles(false);
			d3.select(plot.element)
				.datum(data)
				.call(chart);
			// Chart Resizing
			nv.utils.windowResize(chart.update);
			return chart;
		});
	},

	// Histogram Plot
	histogram 		: function (data, args) {
		var plot 			= this;
		nv.addGraph(function () {
			var data 		= typeof data 			=== 'undefined' ? plot.testData("histogram") 	: data,
				args 		= typeof args 			=== 'undefined' ? {} 							: args,
				format 		= typeof args.format 	=== 'undefined' ? {xTick: ',f', yTick: ',.1f'}	: args.format,
				duration 	= typeof args.duration 	=== 'undefined' ? 350 							: args.duration,
				chart 		= nv.models.multiBarChart()
					.transitionDuration(duration)
					.reduceXTicks(true)   	//If 'false', every single x-axis tick label will be rendered.
					.rotateLabels(0)      	//Angle to rotate x-axis labels.
					.showControls(true)   	//Allow user to switch between 'Grouped' and 'Stacked' mode.
					.groupSpacing(0.1);    	//Distance between each group of bars.
				// Format Chart Ticks
				chart.xAxis.tickFormat(d3.format(format.xTick));
				chart.yAxis.tickFormat(d3.format(format.yTick));
			d3.select(plot.element)
				.datum(data)
				.call(chart);
			// Chart Resizing
			nv.utils.windowResize(chart.update);
			return chart;
		});
	},

/*
Data Generating Methods
*/

	// Generate Test Data
	testData 		: function (chart, args) {
		var types 	= {

			// Line Test Data
			line 		: function (args) {
				return stream_layers(3, 128, .1).map(function (data, i) {
					return { 
						key 	: 'Stream' + i,
						values 	: data
					};
				});
			},

			// Scatter Test Data
			scatter 	: function (args) {
				var data 	= [],
					shapes 	= ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
					random 	= d3.random.normal();
				for (i = 0; i < args.groups; i++) {
					data.push({
						key 		: 'Group ' + i,
						values		: []
					});
					for (j = 0; j < args.points; j++) {
						data[i].values.push({
							x 		: random(),
						 	y 		: random(),
						 	size	: Math.random(),   //Configure the size of each scatter point
						 	shape 	: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
						});
					}
				}
				return data;
			},

			// Histogram Test Data
			histogram 	: function (args) {
				return stream_layers(3, 10 + Math.random() * 100, .1).map(function (data, i) {
					return {
						key 	: 'Stream' + i,
						values 	: data
					};
				});
			},

		};
		// Evaluate
		return types[chart]();
	}
};
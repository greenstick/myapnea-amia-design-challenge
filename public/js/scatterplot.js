var Scatterplot = function (config, data) {
	this.init(config, data);
};

Scatterplot.prototype = {

	/*
	Core Routines
	*/

	init: function (config, data) {
		var SP = this;
			SP.parent 		= config.parent 	|| "body",
			SP.target 		= config.target 	|| ".graph",
			SP.width 	 	= config.width 		|| 400,
			SP.height 		= config.height		|| 400,
			SP.margin 		= config.margin 	|| {top: 20, right: 20, bottom: 20, left: 20},
			SP.xMax 		= config.xMax,
			SP.xMin 		= config.xMin,
			SP.yMax 		= config.yMax,
			SP.yMin 		= config.yMin,
			SP.data 		= data;
			console.log(SP.data)
			// D3 Variables
			SP.element 		= d3.select(SP.target)
								.append("svg:svg")
								.attr("width", SP.width)
								.attr("height", SP.height);

			SP.x 			= d3.time.scale().range([0, SP.width]);
			SP.y 			= d3.scale.linear().range([0, SP.height]);

			SP.xAxis 		= d3.svg.axis().scale(SP.x)
								.orient("bottom").ticks(10);

			SP.yAxis 		= d3.svg.axis().scale(SP.y)
								.orient("left").ticks(10);

			SP.group 		= SP.element
								.append("svg:g");

			// Append Circles

			SP.points 		= SP.group.selectAll("dots")
								.data(SP.data).enter().append("circle")
								.attr("cx", function (d) { return d.x * 50 })
								.attr("cy", function (d) { return d.y1 * 50 })
								.attr("r", 4)
								.attr("opacity", 0.8)
								.attr("stroke", "black")
								.attr("stroke-width","1")
								.attr("fill", "black");
	},

	update: function (data) {
		var SP = this;
		return SP;
	}
}
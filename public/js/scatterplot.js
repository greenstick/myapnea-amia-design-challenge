var Scatterplot = function (config, data) {
	this.init(config);
};

Scatterplot.prototype = {

	/*
	Core Routines
	*/

	init: function (config, x, y) {
		var SP = this;
			SP.parent 		= config.parent 	|| "body",
			SP.target 		= config.target 	|| ".graph",
			SP.width 	 	= config.width 		|| 400,
			SP.height 		= config.height		|| 400,
			SP.margins 		= config.margins 	|| {top: 40, right: 40, bottom: 40, left: 40};
			// D3 Variables
			// SP.element 		= d3.select(SP.target)
			// 					.append("svg:svg")
			// 					.attr("width", SP.width)
			// 					.attr("height", SP.height);

			// SP.x 			= d3.scale.linear()
			// 					.domain([0, d3.max(x)])
			// 					.range([0, SP.width]);
			// SP.y 			= d3.scale.linear()
			// 					.domain([0, d3.max(y)])
			// 					.range([0, SP.height]);

			// SP.xAxis 		= d3.svg.axis()
			// 					.scale(SP.x)
			// 					.orient("bottom");

			// SP.yAxis 		= d3.svg.axis()
			// 					.scale(SP.y)
			// 					.orient("left");

			// SP.group 		= element.append("svg:g");

			// SP.group.selectAll("scatter-dots")
			// 	.data(SP.data)



	},

	update: function (data) {
		var SP = this;
		return SP;
	}
}
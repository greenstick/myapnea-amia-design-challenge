var Lineplot = function (config, data) {
	this.init(config, data);
};

Lineplot.prototype = {

	/*
	Core Routines
	*/

	init: function (config, data) {
		var LP = this;
			LP.parent 		= config.parent 	|| "body",
			LP.target 		= config.target 	|| ".graph",
			LP.width 	 	= config.width 		|| 400,
			LP.height 		= config.height		|| 400,
			LP.margin 		= config.margin 	|| {top: 40, right: 40, bottom: 40, left: 40},
			LP.xMax 		= config.xMax,
			LP.xMin 		= config.xMin,
			LP.yMax 		= config.yMax,
			LP.yMin 		= config.yMin,
			LP.data 		= data;
			// D3 Elements Setup
			LP.element 		= d3.select(LP.target)
								.append("svg:svg")
								.attr("width", LP.width)
								.attr("height", LP.height);

			LP.groupWidth 	= LP.width - LP.margin.left - LP.margin.right;
			LP.groupHeight 	= LP.height - LP.margin.top - LP.margin.bottom;

			LP.group 		= LP.element
								.append("svg:g")
								.attr("width", LP.groupWidth)
								.attr("height", LP.groupHeight)
								.attr("transform", "translate(" + LP.margin.left + "," + LP.margin.top + ")");

			// Scale Axes
			LP.x 			= d3.time.scale().range([0, LP.groupWidth]);
			LP.y 			= d3.scale.linear().range([LP.groupHeight, 0]);

			LP.xAxis 		= d3.svg.axis().scale(LP.x)
								.orient("bottom").ticks(6);
			LP.yAxis 		= d3.svg.axis().scale(LP.y)
								.orient("left").ticks(6);

			LP.y1Line 		= d3.svg.line()
								.x(function (d) { return LP.x(d.date); })
								.y(function (d) { return LP.y(d.y1); });

			LP.y2Line 		= d3.svg.line()
								.x(function (d) { return LP.x(d.date); })
								.y(function (d) { return LP.y(d.y2); });

			LP.rendered 	= LP.render(LP.data);

		return LP;
	},

	render: function (data) {
		var LP 		= this,
			dates 	= [],
			uData 	= [];
		LP.data.forEach(function (d) {
			var date = new Date(d.date);
			if ($.inArray(date, dates) === -1) {
				dates.push(date);
				d.date = date;
				d.x 	= + d.x;
				d.y1 	= + d.y1;
				d.y2 	= + d.y2; 
				uData.push(d);
			}
			data = uData;
		});

		LP.x.domain(d3.extent(data, function (d) {return d.date;}));
		LP.y.domain([0, LP.yMax]);

		LP.group.append("path")
			.attr("d", LP.y1Line(data))
			.attr("stroke", "rgba(250, 181, 58, 0.9)")
			.attr("stroke-width", 2)
			.attr("fill", "none")
			.attr("id", "y1");

		LP.group.append("path")
			.attr("d", LP.y2Line(data))
			.attr("stroke", "rgba(89, 153, 222, 0.9)")
			.attr("stroke-width", 2)
			.attr("fill", "none")
			.attr("id", "y2");

		LP.group.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + LP.groupHeight + ")")
			.call(LP.xAxis);

		LP.group.append("g")
			.attr("class", "y axis")
			.call(LP.yAxis);

		return LP;
	},

	update: function (data) {
		data.forEach(function (d) {
			var date = new Date(d.date);
			if ($.inArray(date, dates) === -1) {
				dates.push(date);
				d.date = date;
				d.x 	= + d.x;
				d.y1 	= + d.y1;
				d.y2 	= + d.y2; 
				uData.push(d);
			}
			data = uData;
		});
		LP.group.select("#y1").data()

		return LP;
	}
}
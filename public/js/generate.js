// Instantiation Function
var Generate = function (config) {
	this.init(config);
};


// Utilities Prototype
Generate.prototype = {

	// Initialization Function
	init: function (config) {
		return this;
	},

	// Generate a Unique Identifier
	generateUUID: function () {
	 	var d = new Date().getTime();
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	},

/*

generateSurveyData - Output Schema

[
	{
		"survey": "About Me",
		"responses": [
			{
				"number": 1,
				"question": "What if your date of birth?",
				"answer": "10/04/1988",
				"answerCode": null
			},
			{
				"number": 2,
				"question": "What is your sex?",
				"answer": "Male",
				"answerCode": 1
			},
			{
				"number": 3,
				"question": "What is your racial background?",
				"answer": "Some other race or origin (please specify)",
				"answerCode": 5
			},
			{
				"number": 4,
				"question": "Are you of Hispanic, Latino, or Spanish origin or ancestry?",
				"answer": "Unsure",
				"answerCode": 5
			},
			{
				"number": 5,
				"question": "What is the highest degree or level of school you have completed?",
				"answer": "Some college or 2-year degree",
				"answerCode": 3
			},
			{
				"number": 6,
				"question": "Last year, what was your total household income from all sources, before taxes?",
				"answer": "$250,000 and above",
				"answerCode": 6
			}
		]
	}
]

*/

	generateSurveyData: function (schema, count) {
		var surveyData 		= [];
		for (var i = 0; i < schema.length; i++) {
			var survey 	= schema[i],
				title 	= schema[i].title;
			for (var j = 0; j < count; j++) {
				var submission 	= {
					title 		: survey.title,
					responses 	: []
				};
				for (var k = 0; k < survey.questions.length; k++) {
					var seed 		= Math.random(),
						index 		= Math.floor(seed * survey.questions[k].options.length),
						bmi 		= ((0.5 + (Math.random() * 0.1) + (seed * 0.4)) * 42).toFixed(2),
						height 		= Math.floor((0.6 + (seed * 0.4)) * 90),
						response 	= {},
						answer;
					if (survey.questions[k].validation.hasOwnProperty("type")) {
						var value 		= survey.questions[k].validation,
							answerTypes = {
								Datetime 	: function () {
									return new Date();
								},
								Height 		: function () {
									return height;
								},
								Weight 		: function () {
									return Math.floor(bmi * ((height * height) / 703));
								},
								Hours 		: function () {
									return Math.floor(((0.5 + (Math.random() * 0.05) + (seed * 0.2)) * 8));
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
		return surveyData;
	},

/*
generateUserData - Output Schema

{
	"userID": "3c870864-21c9-4716-8280-c204461e317a",
	"cpap": false,
	"responses": [
		[
			{
				key: "date",
				name: "Date",
				value: "5 / 18 / 2015"
			},
			{
				key: "datetime",
				name: "Time",
				value: Mon May 18 2015 15:41:47 GMT-0700 (PDT)
			},
			{
				key: "height",
				name: "Height (in)",
				value: 72
			},
			{
				key: "weight",
				name: "Weight (lbs)",
				value: 180
			},
			{
				key: "bmi",
				name: "Body Mass Index (BMI)",
				value: 25.24
			},
			{
				key: "cpap",
				name: "CPAP Hours per Night",
				value: 4
			},
			{
				key: "bloodPressure",
				name: "Blood Pressure (mm/Hg)",
				value: 140~120
			},
			{
				key: "heartRate",
				name: "Heart Rate (BPM)",
				value: 120
			},
			{
				key: "sleepiness",
				name: "Daytime Sleepiness",
				value: 4
			},
			{
				key: "sleepQuality",
				name: "Sleep Quality",
				value: 6
			},
			{
				key: "arousalCount",
				name: "Night Time Arousals",
				value: 2
			}
		]
	]
}

*/

	generateUserData: function (count, months) {
		var generator 	= this,
		 	date 		= new Date(),
		 	seed 		= Math.random(),
		 	dates 		= ["date"],
		 	datetimes 	= ["datetime"],
		 	heights 	= ["height"],
		 	weights 	= ["weight"],
		 	bmis 		= ["bmi"],
		 	cpaphrs 	= ["cpaphrs"],
		 	dbps 		= ["dbp"],
		 	sbps 		= ["sbp"],
		 	bps 		= ["bp"],
		 	heartrates 	= ["heartrate"],
		 	sleepinesses= ["sleepiness"],
		 	sleepquals 	= ["sleepquality"],
		 	arouscounts = ["arousalcount"],
		 	i 			= 0,
		 	seen 		= [],
		 	output;
		while (i < count) {
			var rawDate 		= new Date(Math.floor(date.getTime() - ((months / 12) * 36500000000 * Math.random()))),
				newDate 		= rawDate.getFullYear() + "/" + (rawDate.getMonth() + 1) + "/" + rawDate.getDate(),
				bmi 			= Number(((0.5 + (Math.random() * 0.1) + (seed * 0.4)) * 42).toFixed(2)),
				height 			= Math.floor((0.6 + (seed * 0.4)) * 90), 
				weight 			= Math.floor(bmi * ((height * height) / 703)),
				cpapHrs 		= Math.floor(((0.8 * (seed * 0.5)) + (Math.random() * 0.6)) * 8),
				bpRandom 		= Math.random() * 0.25,
				sbpRandom 		= 0.50 + bpRandom + (Math.random() * 0.05) + (seed * 0.2) + ((bmi / 42) * 0.25),
				dbpRandom 		= 0.50 + bpRandom - (Math.random() * 0.05) + (seed * 0.2) + ((bmi / 42) * 0.25),
				sbp 			= Math.floor(sbpRandom * 140),
				dbp 			= Math.floor(dbpRandom * 110),
				bloodPressure 	= {sbp: sbp, dbp: dbp},
				heartRate 		= Math.floor(((0.4 + (Math.random() * 0.1) + (seed * 0.3)) * 128) + ((bmi / 42) * 0.2)),
				sleepiness 		= Math.floor(((Math.random() * 0.3) + (((8 / cpapHrs) / 8) * 0.6) + (seed * 0.1)) * 10),
				sleepQuality	= Math.floor(((Math.random() * 0.1) + ((cpapHrs / 8) * 0.8) + (seed * 0.1)) * 10),
				arousalCount 	= Math.floor(((Math.random() * 0.2) + (((8 / cpapHrs) / 8) * 0.5) + (seed * 0.3)) * 80),
				datetime 		= rawDate.toISOString().split('T')[0];
				sleepiness 		= isFinite(sleepiness) 		? sleepiness 	: 10;
				arousalCount 	= isFinite(arousalCount) 	? arousalCount 	: 12;
				sbp 			= isFinite(sbp) 			? sbp 			: 140;
				dbp 			= isFinite(dbp) 			? dbp 			: 110;
				heartRate 		= isFinite(heartRate) 		? heartRate 	: 128;
			if (seen.indexOf(datetime) === -1) {
				dates.push(newDate);
				datetimes.push(datetime);
				weights.push(weight);
				heights.push(height);
				bmis.push(bmi);
				cpaphrs.push(cpapHrs);
				dbps.push(dbp);
				sbps.push(sbp);
				bps.push(bloodPressure);
				heartrates.push(heartRate);
				sleepinesses.push(sleepiness);
				sleepquals.push(sleepQuality);
				arouscounts.push(arousalCount);
				seen.push(datetime);
				i++
			}
		}
		output = [
			datetimes,
			weights,
			bmis,
			cpaphrs,
			sbps,
			dbps,
			heartrates,
			sleepinesses,
			sleepquals,
			arouscounts
		];
		return output;
	},

/*

generateSocialData - Output Schema

[
	{
		"userID": "3c870864-21c9-4716-8280-c204461e317a",
		"cpap": false,
		"responses": [
			[
				{
					key: "date",
					name: "Date",
					value: "5 / 18 /2015"
				},
				{
					key: "datetime",
					name: "Time",
					value: Mon May 18 2015 15:41:47 GMT-0700 (PDT)
				},
				{
					key: "height",
					name: "Height (in)",
					value: 72
				},
				{
					key: "weight",
					name: "Weight (lbs)",
					value: 180
				},
				{
					key: "bmi",
					name: "Body Mass Index (BMI)",
					value: 25.24
				},
				{
					key: "cpap",
					name: "CPAP Hours per Night",
					value: 4
				},
				{
					key: "bloodPressure",
					name: "Blood Pressure (mm/Hg)",
					value: 140~120
				},
				{
					key: "heartRate",
					name: "Heart Rate (BPM)",
					value: 120
				},
				{
					key: "sleepiness",
					name: "Daytime Sleepiness",
					value: 4
				},
				{
					key: "sleepQuality",
					name: "Sleep Quality",
					value: 6
				},
				{
					key: "arousalCount",
					name: "Night Time Arousals",
					value: 2
				}
			]
		]
	}
]

*/

	generateSocialData: function (userCount, maxRecordCount, months) {
		var G 			= this, 
			socialData 	= [];
		for (var i = 0; i < userCount; i++) {
			var count 	= Math.floor(maxRecordCount * Math.random()),
				user 	= G.generateUserData(count, months);
			socialData.push(user);
		}
		return socialData;
	}
};
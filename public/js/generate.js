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
		{
			"date": "Mon May 18 2015 15:41:47 GMT-0700 (PDT)",
			"heightIn": 72,
			"weightLbs": 180,
			"cpapHrs": 4,
			"dbpMmHg": 120,
			"sbpMmHg": 80,
			"heatRateBPM": 70,
			"sleepiness": 10,
			"sleepQuality": 10,
			"arousalCount": 10
		}
	]
}

*/

	generateUserData: function (count) {
		var generator = this,
			output 	= {
				userID 		: generator.generateUUID(),
				cpap 		: true,
				responses 	: []
			},
		 	date 	= new Date(),
		 	seed 	= Math.random();
		for (var i = 0; i < count; i++) {
			var rawDate 		= new Date(Math.floor(date.getTime() - (36500000000 * Math.random()))),
				newDate 		= rawDate.getFullYear() + "/" + (rawDate.getMonth() + 1) + "/" + rawDate.getDate(),
				bmi 			= ((0.5 + (Math.random() * 0.1) + (seed * 0.4)) * 42).toFixed(2),
				height 			= Math.floor((0.6 + (seed * 0.4)) * 90), 
				weight 			= Math.floor(bmi * ((height * height) / 703)),
				cpapHrs 		= Math.floor(((0.5 + (Math.random() * 0.05) + (seed * 0.2)) * 8)),
				bpRandom 		= Math.random() * 0.25,
				sbpRandom 		= 0.75 + bpRandom + (Math.random() * 0.05) + (seed * 0.2),
				dbpRandom 		= 0.75 + bpRandom - (Math.random() * 0.05) + (seed * 0.2),
				sbp 			= Math.floor(sbpRandom * 120),
				dbp 			= Math.floor(dbpRandom * 120),
				heartRate 		= Math.floor((0.6 + (Math.random() * 0.1) + (seed * 0.3)) * 120),
				sleepiness 		= Math.floor(((Math.random() * 0.6) + (seed * 0.4)) * 10),
				sleepQuality	= Math.floor(((Math.random() * 0.6) + (seed * 0.4)) * 10),
				arousalCount 	= Math.floor(((Math.random() * 0.6) + (seed * 0.4)) * 6),
				response 		= {
					date 			: newDate,
					datetime 		: rawDate,
					heightIn 		: height,
					weightLbs 		: weight,
					cpapHrs 		: cpapHrs,
					sbpMmHg 		: sbp,
					dbpMmHg 		: dbp,
					heartRateBPM 	: heartRate,
					sleepiness 		: sleepiness,
					sleepQuality 	: sleepQuality,
					arousalCount 	: arousalCount
				};
			output.responses.push(response);
		}
		return output;
	},

/*

generateSocialData - Output Schema

[
	{
		"userID": "3c870864-21c9-4716-8280-c204461e317a",
		"cpap": false,
		"responses": [
			{
				"date": "Mon May 18 2015 15:41:47 GMT-0700 (PDT)",
				"heightIn": 72,
				"weightLbs": 180,
				"cpapHrs": 4,
				"dbpMmHg": 120,
				"sbpMmHg": 80,
				"heatRateBPM": 70,
				"sleepiness": 10,
				"sleepQuality": 10,
				"arousalCount": 10
			}
		]
	}
]

*/

	generateSocialData: function (userCount, maxRecordCount) {
		var G 			= this, 
			socialData 	= [];
		for (var i = 0; i < userCount; i++) {
			var count 	= Math.floor(maxRecordCount * (0.6 + (Math.random() * 4))),
				user 	= G.generateUserData(count);
			socialData.push(user);
		}
		return socialData;
	}
};
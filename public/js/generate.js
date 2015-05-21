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
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	},

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
		return output
	},

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
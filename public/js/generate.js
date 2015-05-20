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
					var random 		= Math.random(),
						index 		= Math.floor(random * survey.questions[k].options.length),
						response 	= {},
						answer;
					if (survey.questions[k].validation.hasOwnProperty("type")) {
						var value 		= survey.questions[k].validation,
							answerTypes = {
								Datetime 	: function () {
									return new Date();
								},
								Height 		: function () {
									return Math.random() * 108;
								},
								Weight 		: function () {
									return Math.random() * 400;
								},
								Hours 		: function () {
									return Math.random() * 12;
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
		 	date 	= new Date();
		for (var i = 0; i < count; i++) {
			var response 	= {},
				bpRandom 	= Math.random();
			if (bpRandom < 0.5) bpRandom = bpRandom + (Math.random() * 0.5)
			var bp1 		= Math.floor(bpRandom * 200 * Math.random()),
				bp2 		= Math.floor(bpRandom * 160 * Math.random()),
				dpb 		= null,
				sbp 		= null;
			if (bp1 < bp2) {
				dbp = bp1;
				sbp = bp2;
			} else {
				sbp = bp1;
				dbp = bp2;
			}
			rawDate = new Date(Math.floor(date.getTime() - (36500000000 * Math.random())));
			newDate = rawDate.getFullYear() + "/" + (rawDate.getMonth() + 1) + "/" + rawDate.getDate();
			response["date"] 			= newDate;
			response["heightIn"]		= Math.floor(Math.random() * 84);
			response["weightLbs"] 		= Math.floor(Math.random() * 300);
			response["cpapHrs"] 		= Math.floor(Math.random() * 8);
			response["dbpMmHg"] 		= dbp;
			response["sbpMmHg"]  		= sbp;
			response["heartRateBPM"] 	= Math.floor(Math.random() * 140);
			response["sleepiness"] 		= Math.floor(Math.random() * 10);
			response["sleepQuality"] 	= Math.floor(Math.random() * 10);
			response["arousalCount"] 	= Math.floor(Math.random() * 4);
			output.responses.push(response);
		}
		return output
	},

	generateSocialData: function (userCount, maxRecordCount) {
		var socialData = [];

		return socialData;
	}

};
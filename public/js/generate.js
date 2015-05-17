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

	generateDataFromSchema: function () {
		var responses 	= [],
						count 		= 200,
						name 		= "About Me";
					for (var i = 0; i < count; i++) {
						var obj = {
							survey: name,
							responses: []
						};
						for (var j = 0; j < I.surveyData.length; j++) {
							var survey = I.surveyData[j];
							for (var k = 0; k < survey.questions.length; k++) {
								var random 	= Math.random(),
									index 	= Math.floor(random * survey.questions[k].options.length),
									answer;
								if (survey.questions[k].options.length === 0) {
									answer 		= new Date(); 
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
								};
								obj.responses.push(response);
							}
						}
						responses.push(obj);
					}
					console.log(responses);
				});
	}

};
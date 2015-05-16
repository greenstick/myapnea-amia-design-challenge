// Example model

var mongoose 	= require('mongoose'),
  	Schema 		= mongoose.Schema;

var SurveySchema = new Schema({
	title 	: String,
	url 	: String,
	text 	: String
});

SurveySchema.virtual('date').get(function () {
	return this._id.getTimestamp();
});

mongoose.model('Survey', SurveySchema);


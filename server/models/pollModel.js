var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionSchema = mongoose.Schema({
	option: {type: String, required: true, minlength: 3},
	vote_count: {type: Number, default: 0}
});

var PollSchema = mongoose.Schema({
	question: {type: String, required: true, minlength: 8},
	options: [OptionSchema],
	_user: {type: Schema.Types.ObjectId, ref:'User'}
}, {timestamps: true});

mongoose.model('Poll', PollSchema);
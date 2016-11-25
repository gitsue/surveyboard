var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	name: String,
	_polls: {type: Schema.Types.ObjectId, ref:'Poll'}
});

mongoose.model('User', UserSchema);
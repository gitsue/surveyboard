var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		add: function(req, res){
			User.findOne({name: req.body.name}, function(error, result){
				if(!result){
					var user = new User(req.body);
					user.save(function(error, result){
						if(error){
							console.log(error);
						}
						else {
							res.json(result);
						}
					});
				}
				else {
					res.json(result);
				}
			});
		},

	}
})();
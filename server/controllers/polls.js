var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

module.exports = (function(){
	return {
		index: function(req, res){
			Poll.find({}).populate('_user').exec(function(error, result){
				if(!error){
					res.json(result);
				}
				else {
					console.log('something went wrong!');
				}
			});
		},

		add: function(req, res){
			User.findOne({_id: req.body.user}, function(error, result){
				if(result){
					var poll = new Poll({question: req.body.question, _user: result});
					for(var i=0; i< req.body.options.length; i++){
						poll.options.push({option: req.body.options[i]});
					}
					poll.save(function(error, newPoll){
						if(newPoll){
							res.json(newPoll);
						}
						else{
							console.log(error);
							console.log('poll creation went wrong');
						}
					});
				}
				else {
					console.log('could not find user');
				}
			});
		},
		show: function(req, res){
			Poll.findOne({_id: req.params.id}, function(error, result){
				if(error){
					console.log(error);
				}
				else {
					res.json(result);
				}
			});
		},
		addVote: function(req, res){
			Poll.findOne({_id: req.params.id}, function(error, result){
				if(error){
					console.log(error);
				}
				else {
					result.options[req.body.idx].vote_count++;
					result.save();
					res.json('vote added!');
				}
			})
		},
		delete: function(req, res){
			Poll.remove({_id: req.params.id}, function(error, result){
				if(error){
					console.log(error);
				}
				else{
					res.json('deleted!');
				}
			});
		},
		
	}
})();
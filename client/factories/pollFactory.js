app.factory('pollFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('polls').then(function(returned_data){
			callback(returned_data.data);
		});
	};

	factory.addPoll = function(newPoll,user_id, callback){
		var newP = {
			question: newPoll.question,
			options: [
				newPoll.option1,
				newPoll.option2,
				newPoll.option3,
				newPoll.option4
			],
			user: user_id
		};
		$http.post('/polls/', newP).then(function(returned_data){
			callback(returned_data.data);
		});
	};

	factory.showPoll = function(poll_id, callback){
		$http.get('/polls/'+ poll_id).then(function(returned_data){
			callback(returned_data.data);
		});
	};
	factory.addVote = function(option_idx, poll_id){
		var oidx = {
			idx: option_idx
		};
		$http.post('/polls/' + poll_id, oidx).then(function(returned_data){
		});
	};
	factory.deletePoll = function(poll_id){
		$http.delete('/polls/' + poll_id).then(function(returned_data){
		});
	};

	return factory;
});
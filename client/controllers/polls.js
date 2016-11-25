app.controller('pollsController', function($scope, $location, $cookies, pollFactory, $routeParams, $route){
	$scope.curr_user = $cookies.get('curr_user');

	$scope.polls = [];

	pollFactory.index(function(returned_data){
		$scope.polls = returned_data;
	});

	$scope.addPoll = function(isValid){
		if(isValid){
			$location.url('/dashboard');
			pollFactory.addPoll($scope.newPoll, $cookies.get('curr_user'), function(returned_data){
				if(returned_data){
					$scope.polls.push(returned_data);
				}
			});
		}
	};

	$scope.logout = function(){
		$cookies.remove('curr_user');
		$location.url('/');
	};
	$scope.deletePoll = function(poll_id){
		pollFactory.deletePoll(poll_id);
		$route.reload();
	};	
	if($routeParams.id){
		pollFactory.showPoll($routeParams.id, function(returned_data){			
			$scope.curr_poll = returned_data;
			// console.log($scope.curr_poll);
		});

		$scope.addVote = function(option_index, poll_id){
			pollFactory.addVote(option_index, poll_id);
			$route.reload();
		};

	}
});
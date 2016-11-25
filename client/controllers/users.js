app.controller('usersController', function($scope, $cookies, $location, userFactory){

	if($cookies.get('curr_user')){
		$location.url('dashboard');
	}
	else {
		$location.url('/');
	}

	$scope.addUser = function(){
		$location.url('/dashboard');
		userFactory.addUser($scope.newUser, function(returned_data){
			if(returned_data){
				$cookies.put('curr_user', returned_data._id);
				// console.log($cookies.get('curr_user'));				
			}
		});
	};
});
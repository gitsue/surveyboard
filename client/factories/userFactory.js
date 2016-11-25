app.factory('userFactory', function($http){
	var factory = {};

	factory.addUser = function(newUser, callback){
		$http.post('/users',newUser).then(function(returned_data){
			callback(returned_data.data);
		});
	};

	return factory;
});
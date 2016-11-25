var app = angular.module('app',['ngRoute','ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/create', {
		templateUrl: 'partials/newpoll.html'
	})
	.when('/poll/:id',{
		templateUrl: 'partials/showpoll.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});
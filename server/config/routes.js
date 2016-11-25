var user = require('./../controllers/users.js');
var poll = require('./../controllers/polls.js');

module.exports = function(app){
	app.post('/users', function(req, res){
		user.add(req, res);
	});
	app.get('/polls', function(req, res){
		poll.index(req, res);
	});
	app.get('/polls/:id', function(req, res){
		poll.show(req, res);
	});
	app.post('/polls', function(req, res){
		poll.add(req, res);
	});
	app.post('/polls/:id', function(req, res){
		poll.addVote(req, res);
	});
	app.delete('/polls/:id', function(req, res){
		poll.delete(req, res);
	});
};
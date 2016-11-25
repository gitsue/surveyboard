var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(express.static(path.join(__dirname, "/client")));
app.use(express.static(path.join(__dirname, "/bower_components")));

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
 console.log("listening on port: " + port);
});

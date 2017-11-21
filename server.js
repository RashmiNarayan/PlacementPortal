var http = require('http');
var express = require('express');
var app = express();

require('./routes/student')(app);
require('./routes/placement')(app);

app.use(express.static('public'));

var server = http.createServer(app).listen(process.env.PORT || 80, function(){
	console.log("Server Started");
});
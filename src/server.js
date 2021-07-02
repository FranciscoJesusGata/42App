var express = require('express'),
	session = require('express-session'),
	app = express(),
	path = require('path');

require('dotenv').config();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render(path.join(__dirname + '/index.ejs'));
});

app.listen(80);

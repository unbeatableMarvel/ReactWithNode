'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var port = 3000;

mongo.connect("mongodb://localhost:27017/crudoperation", function (err, response) {
  if (err) {
    console.log('Failed to connect to ' + db);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});
// Required application specific custom router module
var itemRouter = require('./routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.use('/', itemRouter);

// Define home route
app.get('/', function (req, res) {
  console.log("i am here ");
});
app.use(methodOverride());
// Start the server
app.listen(port, function () {
  console.log('Server is running on Port: ', port);
});
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../index')));
module.exports = app;
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override');
var path = require('path');

var app = express();
var port = 3000;

var DbConnection = mongoose.connect("mongodb://localhost:27017/MenuList", function (err, connect) {
  if (err) {
    console.log("Error in connecting with MongoDB")
  }
  else {
    console.log("MongoDB is connected")
  }


});



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Required application specific custom router module
var itemRouter = require('./routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.use('/', itemRouter);


// Start the server
app.listen(port, function () {
  console.log('Server is running on Port: ', port);
});

app.use(cookieParser());
module.exports = app;

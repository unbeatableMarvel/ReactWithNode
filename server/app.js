var express =require('express');
var mongoose =require('mongoose');
var bodyParser =require('body-parser');
var morgan =require('morgan');
var cookieParser = require('cookie-parser')
var methodOverride =require('method-override');
var path = require('path');

var app = express();
var port = 3000;

mongoose.connect("mongodb://localhost:27017/crudoperation");  

// Required application specific custom router module
var itemRouter = require('./routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/',itemRouter);


// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});

app.use(cookieParser());
module.exports=app;

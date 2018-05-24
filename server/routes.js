var express = require('express');
var app = express();
var itemRouter = express.Router();

// Require Item model in our routes module
var Items = require('./schema');
// Defined get data(index or listing) route
itemRouter.route('/').get(function (req, res) {
  Items.find(function (err, itms) {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(itms);
    }
  });
});

itemRouter.route('/add').post(function (req, res) {

  console.log("addtion ", req.body)
  var newRqst = new Items(req.body);
  newRqst.save(function(err,item){
    if (err) {
      res.status(500).json(err)
    }
    else {
      res.status(200).send("Data Added Successfully")
    }
   
  })
 

});

itemRouter.route('/delete').post(function (req, res) {
  console.log("req",req.body)
  Items.findByIdAndRemove(req.body.id,
    function (err, item) {
      if (err) {
        res.status(500).json(err)
      }
      else {
        res.status(200).send("Deletion done Successfully")
      }
    });
});



//  Defined update route
itemRouter.route('/update').post(function (req, res) {
  Items.findByIdAndUpdate(req.body._id,req.body,{new: true}, function (err, item) {

    if (err) {
      res.status(500).json(err)
    }
    else {
      res.status(200).send("Updation done Successfully")
    }
  });
});



module.exports = itemRouter;

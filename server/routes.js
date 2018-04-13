var express = require('express');
var app = express();
var itemRouter = express.Router();

// Require Item model in our routes module
var Items = require('./schema');

// Defined get data(index or listing) route
itemRouter.route('/').get(function (req, res) {
  console.log("yaeh running");
  Items.find(function (err, itms){
    console.log("kkkkkkkkkk",itms)
    if(err){
      console.log(err);
    }
    else {
     res.send("Data Fetched Successfully")
    }
  });
});

// Defined store route
itemRouter.route('/add/post').post(function (req, res) {
  
  var Items = new Items(req.body);
  Items.save()
    .then(item => {
    // res.redirect('/items');
    console.log("item",item);
    res.send("Data Saved Successfully")
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});



// Defined edit route
itemRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.render('editItem', {item: item});
  });
});

//  Defined update route
itemRouter.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      item.item = req.body.item;

      item.save().then(item => {
          res.redirect('/items');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemRouter.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id},
	   function(err, item){
      console.log("kkkkkkkkkk",item)
		if(err) res.json(err);
		else res.redirect('/items');
	});
});

module.exports = itemRouter;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var MenuList = new Schema({
  title: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  picture: {
    type: String
  }

},{
	collection: 'MenuList'
});

module.exports = mongoose.model('MenuList', MenuList);

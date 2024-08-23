// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  nickname: String,
  description: String,
  age: Number,
  catagories: {
    type: Array,
    default: [],
  },
  datecreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("usersnew", userSchema);

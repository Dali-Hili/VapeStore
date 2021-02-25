const vapes = require("../../vapes.json");
var mongoose = require("mongoose");
const user = require("./userModel.js");

mongoose.connect("mongodb://localhost/vapeStore");

var seedDb = function (vapes) {
  user.insertMany(vapes, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

seedDb(vapes);

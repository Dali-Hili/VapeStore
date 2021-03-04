const vapes = require("../../vapes.json");
const vapes2 = require("../../vapes2.json");
var mongoose = require("mongoose");
// const user = require("./userModel.js");
const product = require("./productModel.js");
const users = require("./userModel.js");
const order = require("./order.js");

mongoose.connect("mongodb://localhost/vapeStore");

var seedDb = function (vapes) {
  product.insertMany(vapes, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

seedDb(vapes);

var seedDbuser = function (vapes2) {
  users.insertMany(vapes2, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

seedDbuser(vapes2);


var seedDbuser = function (orderReq) {
  order.insertMany(orderReq, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

seedDbuser(orderReq);

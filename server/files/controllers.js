var mongoose = require("mongoose");
const UserModel = require("../database/userModel.js");
const ProductModel = require("../database/productModel.js");

module.exports.findAll = async function (req, res) {
  try {
    let products = await ProductModel.find({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

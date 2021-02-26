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

module.exports.createOne = async (req, res) => {
  const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
  })
  try{
      const saveUser = await newUser.save()
      res.json(saveUser)
  }catch(error){
      res.json(error);
  }
};
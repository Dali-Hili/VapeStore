var mongoose = require("mongoose");
const UserModel = require("../database/userModel.js");
const ProductModel = require("../database/productModel.js");
const bcrypt=require("bcrypt");
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
module.exports.findUser= async (req, res)=>{
  const user = UserModel.findOne({name: req.body.name})
  if(!user){
      res.send('user not found')
  }
  try{
      if(await bcrypt.compare(req.body.password, user.password)){
          res.send('success')
      }else{
          res.send("Not allowed ")
      }
  }catch(err){
      res.send(err)
  }
}
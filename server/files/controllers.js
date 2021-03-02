var mongoose = require("mongoose");
const UserModel = require("../database/userModel.js");
const ProductModel = require("../database/productModel.js");
const bcrypt = require("bcrypt");
const { signupValidation, loginValidation } = require("../auth");
const jwt = require("jsonwebtoken");

module.exports.findAllusers = async function (req, res) {
  try {
    const products = await UserModel.find({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

module.exports.createOne = async (req, res) => {
  //VALIDATE THE DATA
  const { error } = signupValidation(req.body);
  if (error) return res.send(error.details[0].message);

  //CHECK IF THE USER IS ALREADY IN THE DATABASE
  const emailExist = await UserModel.findOne({ email: req.body.email });
  if (emailExist) return res.send("Email already exists");

  //CRATE A NEW USER
  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (error) {
    res.json(error);
  }
};
module.exports.findUser = async (req, res) => {
  // VALIDATE THE DATA
  if (req.body.email === "admin" && req.body.password === "admin") {
    res.send("admin");
    const token = jwt.sign({ _id: 00 }, "fghfghrtfjyuuikyufiy");
    res.header("auth-token", token);
    res.send({ mesaage: "admin", token: token });
  } else {
    const { error } = loginValidation(req.body);
    if (error) return res.send(error.details[0].message);

    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        console.log("user not found");
      }
      if (await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ _id: user._id }, "fghfghrtfjyuuikyufiy");
        res.header("auth-token", token);
        res.send({ mesaage: "success", token: token });
      } else {
        res.send("Email or password incorrect");
      }
      // create and assign a token
    } catch (err) {
      res.send(err);
    }
  }
};
// crud for admin
module.exports.findAll = async function (req, res) {
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

module.exports.addprod = async function (req, res) {
  try {
    const product = await ProductModel.create(req.body);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

module.exports.deleteOne = async function (req, res) {
  try {
    const product = await ProductModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};
module.exports.updateprod = async function (req, res) {
  const prod = {
    imageUrl: req.body.imageUrl,
    title: req.body.title,
    stock: req.body.stock,
    description: req.body.description,
  };
  try {
    let product = await ProductModel.findOne({ _id: req.params.id })
    let update = await product.update({ imageUrl: req.body.imageUrl, title: req.body.title, stock: req.body.stock, description: req.body.description}) 
    res.send(update);
  } catch (err) {
    res.send(err);
  }
};

// module.exports.update = async (req, res) => {
//   try {
//     const update = await ProductModel.updateOne(
//       { _id: req.params._id },
//       {
//         $set: {
//           imageUrl: req.body.imageUrl,
//           title: req.body.title,
//           stock: req.body.stock,
//           description: req.body.description,
//         },
//       }
//     );
//     res.json(update);
//   } catch (error) {
//     res.json({ message: error });
//   }
// };

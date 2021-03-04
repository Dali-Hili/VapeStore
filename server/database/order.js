const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  stock: Number,
  description: String,
  prise: String,
});

module.exports = mongoose.model("order", orderSchema );

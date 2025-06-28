const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  // id {  title, price, imageURL, description }
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Product", productSchema);

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//get all products.
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//add product.   // id {  title, price, imageURL, description }
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "The product is added." });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

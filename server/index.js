const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to the backend server of the project.");
});

app.use("/products", productRoutes);
app.use("/api", checkoutRoutes);

const port = 7000;
app.listen(port, () => {
  console.log(`Server is live on http://localhost:${port}`);
});

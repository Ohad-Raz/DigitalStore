const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
  category: { type: String, required: false },
  company: { type: String, required: false },
  name: { type: String, required: false },
  modelNumber: { type: String, required: false },
  src: { type: String, required: false },
  linkToPage: { type: String, required: false },
  color: { type: String, required: false },
  materials: { type: String, required: false },
  sizeDescription: {
    width: { type: String, required: false },
    height: { type: String, required: false },
  },
  price: { type: Number, required: false },
  currency: { type: String, required: false },
  Date: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };

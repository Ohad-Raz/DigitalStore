
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true }, 
    },
  ],
  shippingAddress: {
    shippingName: { type: String, required: true },
    shippingCountry: { type: String, required: true },
    shippingStreet: { type: String, required: true },
    shippingCity: { type: String, required: true },
    shippingPostalCode: { type: String, required: true },
    shippingStreet2: { type: String },
    houseNumber: { type: String, required: true },
    houseNumber2: { type: String },
  },
  contactInfo: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    housePhone: { type: String },
  },
  shippingMethod: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

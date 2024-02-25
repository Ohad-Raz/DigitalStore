// const mongoose = require("mongoose");

// const checkoutSchema = new mongoose.Schema({
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   products: [
//     {
//       item: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//       quantity: { type: Number, required: true },
//     },
//   ],
//   totalPrice: { type: Number, required: true },
//   checkoutDate: { type: Date, default: Date.now },
//   shippingAddress: {
//     // Define shipping address fields
//     fullName: { type: String, required: true },
//     streetAddress: { type: String, required: true },
//     // Add more fields as needed
//   },
//   billingAddress: {
//     // Define billing address fields
//     fullName: { type: String, required: true },
//     streetAddress: { type: String, required: true },
//     // Add more fields as needed
//   },
//   contactInfo: {
//     // Define contact information fields
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     // Add more fields as needed
//   },
//   shippingMethod: { type: String, required: true }, // Assuming only one shipping method is selected
// });

// const Checkout = mongoose.model("Checkout", checkoutSchema);

// module.exports = Checkout;

// const Checkout = require("../models/checkouts.model");

// const createOrder = async (req, res) => {
//   try {
//     const { totalPrice, owner, products, totalPrice, shippingAddress, billingAddress, contactInfo, shippingMethod } = req.body;

//     const newOrder = new Order({
//       owner,
//       products,
//       totalPrice,
//       shippingAddress,
//       billingAddress,
//       contactInfo,
//       shippingMethod,
//     });

//     await newOrder.save();
//     res.status(201).json({ message: "Order created successfully", data: newOrder });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// module.exports = {
//   createOrder,
// };

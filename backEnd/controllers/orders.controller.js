const Order = require("../models/orders.model");
const { Product } = require("../models/product.model"); // Import the Product model
const createOrder = async (req, res) => {
  try {
    const {
      totalPrice,
      owner,
      products,
      shippingAddress,
      billingAddress,
      contactInfo,
      shippingMethod,
    } = req.body;

    // Populate the currency field for each product
    const populatedProducts = await Promise.all(
      products.map(async (product) => {
        const populatedProduct = await Product.findById(product.item);
        return {
          item: populatedProduct,
          quantity: product.quantity,
          currency: populatedProduct.currency, // Include the currency field
        };
      })
    );

    const newOrder = new Order({
      owner,
      products: populatedProducts, // Use the populated products array
      totalPrice,
      shippingAddress,
      billingAddress,
      contactInfo,
      shippingMethod,
    });
    const userId = req.user.id;

    newOrder.owner = userId;
    await newOrder.save();

    const orders = await Order.find({ owner: userId }).populate(
      "products.item"
    );

    res
      .status(201)
      .json({ message: "Order created successfully", data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ owner: userId }).populate({
      path: "products.item",
      select: "name price currency",
    });
    res.status(200).json({ message: "User orders retrieved successfully", data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const updateFields = req.body;

    const order = await Order.findByIdAndUpdate(orderId, updateFields, {
      new: true,
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res
      .status(200)
      .json({ message: "Order updated successfully", data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  updateOrder,
};

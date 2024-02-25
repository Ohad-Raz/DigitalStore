const { Product } = require("../models/product.model");
const Cart = require("../models/shoppingCart.model");

const addToCart = async (req, res) => {
  try {
    const { item: productId, quantity } = req.body;
    const userId = req.user.id;
    console.log({ userId });
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ owner: userId });
    console.log(cart);
    if (!cart) {
      cart = new Cart({
        owner: userId,
        products: [{ item: productId, quantity }],
      });
    } else {
      const existingProductIndex = cart.products.findIndex(
        (product) => product.item.toString() === productId
      );

      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += quantity;
      } else {
        cart.products.push({ item: productId, quantity });
      }
    }

    await cart.save();
    res
      .status(200)
      .send({ message: "Product added to cart successfully", data: cart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ owner: userId }).populate(
      "products.item"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;

    let cart = await Cart.findOne({ owner: userId });

    if (!cart) {
      return res.status(404).send("Cart not found");
    }

    cart.products = cart.products.filter(
      (product) => product.item.toString() !== productId
    );

    await cart.save();
    res
      .status(200)
      .send({ message: "Product removed from cart successfully", data: cart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const updateFields = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ owner: userId });

    if (!cart) {
      return res.status(404).send("Cart not found");
    }

    const productIndex = cart.products.findIndex(
      (product) => product.item.toString() === productId
    );

    if (productIndex === -1) {
      return res.status(404).send("Product not found in cart");
    }

    Object.keys(updateFields).forEach((key) => {
      cart.products[productIndex][key] = updateFields[key];
    });

    await cart.save();
    res
      .status(200)
      .send({ message: "Product updated in cart successfully", data: cart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateCartItem,
};

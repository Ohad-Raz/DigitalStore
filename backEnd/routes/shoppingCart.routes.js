const { Router } = require("express");
const router = Router();
const { addToCart, getCart, removeFromCart , updateCartItem } = require("../controllers/shoppingCart.controller");
const { auth } = require("../middlewares/auth");

router.post("/", auth, addToCart);
router.get("/", auth, getCart);
router.delete("/:productId", auth, removeFromCart);
router.patch("/:productId", auth, updateCartItem);

module.exports = router;

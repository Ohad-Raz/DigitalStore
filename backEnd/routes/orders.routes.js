const { Router } = require("express");
const router = Router();
const {
  createOrder,
  getUserOrders,
  updateOrder,
} = require("../controllers/orders.controller");
const { auth } = require("../middlewares/auth");

router.post("/", auth, createOrder);
router.get("/", auth, getUserOrders);
router.patch("/:orderId", auth, updateOrder);

module.exports = router;

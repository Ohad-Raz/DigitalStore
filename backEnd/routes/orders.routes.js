const { Router } = require("express");
const router = Router();
const {
  createOrder,
  getUserOrders,
  updateOrder,
} = require("../controllers/orders.controller");
const { auth, authorize } = require("../middlewares/auth");
router.post("/", auth,authorize(["admin","client","contractor"]), createOrder);
router.get("/", auth, authorize(["admin","client","contractor"]), getUserOrders);
router.patch("/:orderId", auth,authorize(["admin"]), updateOrder);

module.exports = router;

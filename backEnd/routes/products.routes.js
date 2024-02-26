const { Router } = require("express");
const router = Router();
// const { Product } = require("../models/productCard.model");
const { auth, authorize } = require("../middlewares/auth");
const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProducts,
  deleteProducts,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", auth,authorize(["admin"]), addProduct);

router.patch("/:id", auth,authorize(["admin"]), updateProducts);

// router.put("/:id" );

router.delete("/:id", auth, authorize(["admin"]),deleteProducts);

module.exports = router;

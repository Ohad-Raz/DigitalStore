const { Router } = require("express");
const router = Router();
// const { Product } = require("../models/productCard.model");
const { auth } = require("../middlewares/auth");
const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProducts,
  deleteProducts,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", auth, addProduct);

router.patch("/:id", auth, updateProducts);

// router.put("/:id" );

router.delete("/:id", auth, deleteProducts);

module.exports = router;

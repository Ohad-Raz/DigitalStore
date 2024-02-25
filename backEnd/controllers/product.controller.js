const { Product } = require("../models/product.model");

const addProduct = async (req, res) => {
  const body = req.body;
  try {
    console.log(req.user);
    body.owner = req.user.id;
    const newProduct = new Product(body);
    await newProduct.save();
    res.send({ message: "success adding product", data: newProduct }); 
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
};

const getProducts = async (req, res) => {
  try {
    const query = req.query;
    console.log("Query parameters:", query); 
    const products = await Product.find({ ...query });
    res.send(products);
  } catch (error) {
    res.status(400).send("Error");
  }
};


const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("owner");
    res.send(product);
  } catch (error) {
    res.status(400).send("Error");
  }
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    let foundProduct = await Product.findById(id);
    if (foundProduct) {
      foundProduct = await Product.findByIdAndUpdate(id, body, { new: true });
      res.send({
        message: "Product updated successfully",
        data: foundProduct,
      });
    } else {
      res.status(404).send("No Product found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.send({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
};

module.exports = {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProducts,
  deleteProducts,
};

// const updateAndaddProduct = async (req, res) => {{
//   const { id } = req.params;
//   const body = req.body;
//   try {
//     let updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
//     if (!updatedLink) {
//       updatedLink = await Link.create(body);
//     }
//     res.send({
//       message: "Link updated or created successfully",
//       data: updatedLink,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("Error");
//   }
// }

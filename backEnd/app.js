require('dotenv').config(); // Ensure this is at the very top of your file

const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/user.routes");
const productsRouter = require("./routes/products.routes");
const cartRouter = require('./routes/shoppingCart.routes');
const ordersRouter = require('./routes/orders.routes');

console.log('EMAIL_USERNAME:', process.env.EMAIL_USERNAME);
console.log('DATABASE_URL:', process.env.DATABASE_URL);
// console.log('Process Environment Variables:', process.env); // Print all environment variables to check if `.env` is loaded

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/carts/items", cartRouter);
app.use("/api/v1/orders", ordersRouter);


module.exports = { app };

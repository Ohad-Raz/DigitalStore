const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/user.routes");
const productsRouter = require("./routes/products.routes");
const cartRouter = require('./routes/shoppingCart.routes');
const ordersRouter = require('./routes/orders.routes');
// const checkoutsRouter = require('./routes/checkouts.routes');



const app = express();

app.use(express.json());

app.use(cors());
// app.use("/api/v1/checkouts", checkoutsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/carts/items", cartRouter);
app.use("/api/v1/orders", ordersRouter);


module.exports = { app };

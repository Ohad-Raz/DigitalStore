const { app } = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { config } = require("./config");

dotenv.config({ path: "./.env" });
mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

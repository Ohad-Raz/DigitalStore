const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  role:{ type: String, required: false }  ,
  user_id: { type: String, required: false },
  fullName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };

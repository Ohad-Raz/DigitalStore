const mongoose = require("mongoose");
const crypto = require("crypto"); // Import the crypto module

const userSchema = new mongoose.Schema({
  role: { type: String, required: false },
  user_id: { type: String, required: false },
  fullName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  passwordResetToken: String, // Add fields for password reset
  passwordResetExpires: Date,
});

// Method to generate password reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  console.log("this is reset token: " + resetToken);
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log("this is hashed token:" + this.passwordResetToken);

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = { User };

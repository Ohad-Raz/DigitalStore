const { User } = require("../models/users.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");
const { sendEmail } = require("../utils/email"); // Import the sendEmail function
const crypto = require("crypto");

// Function to handle forgot password request
const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  // console.log(email);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate password reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // Construct reset URL and message
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/reset-password/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

    // Send reset email using sendEmail function
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    console.error(err.message);
    return next(
      new Error("There was an error sending the email. Try again later!")
    );
  }
};

// Reset password function remains unchanged
const resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return next(new Error("Token is invalid or has expired"));
    }

    // Update user's password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    return next(new Error("Internal server error"));
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("email or password are incorrect");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = generateToken({
        id: user._id,
        email: user.email,
        role: "admin",
      });
      return res.send({ user, token }).status(200);
    }
    return res.status(401).send("email or password are incorrect");
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
};

const register = async (req, res) => {
  const { role, fullName, birthDate, email, password } = req.body;

  if (!fullName || !birthDate || !email || !password) {
    return res
      .status(400)
      .json({ error: "fullName, birthDate, email, and password are required" });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      role,
      fullName,
      birthDate: new Date(birthDate),
      email,
      password: hash,
    });
    newUser.user_id = newUser._id;
    await newUser.save();
    res.status(201).json({ message: "success adding user", data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("error");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, birthDate, email, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullName, birthDate, email, password },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signIn,
  register,
  updateUser,
  deleteUser,
  getUsers,
  forgotPassword,
  resetPassword,
};

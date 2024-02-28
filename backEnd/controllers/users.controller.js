const { User } = require("../models/users.model");
const bcrypt = require("bcryptjs");
const {generateToken} = require("../utils/jwt"); 


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
      const token = generateToken({ id: user._id, email: user.email,role:"admin" });
      return  res.send({user,token}).status(200);
      
    }
    return res.status(401).send("email or password are incorrect");
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
};

const register = async (req, res) => {
  const {role, fullName, birthDate, email, password } = req.body;

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
      password: hash
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

module.exports = { signIn, register, updateUser, deleteUser, getUsers };

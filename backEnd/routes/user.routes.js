const { Router } = require("express");
const router = Router();
const{signIn, register, updateUser, deleteUser,getUsers} = require("../controllers/users.controller");
const {auth} = require("../middlewares/auth");
const {User} = require("../models/users.model")
const { forgotPassword, resetPassword } = require("../controllers/users.controller");

router.post("/reset-password/:token", resetPassword);
router.post("/forgot-password", forgotPassword);
// Route to handle GET request for reset password form
router.get("/reset-password/:token", (req, res) => {
  res.send("Reset Password Form"); // Just send a response indicating that this is the reset password form
});

router.post("/register", register) ;

router.post("/signin", signIn)  ;

router.delete("/:id", deleteUser) ;

router.get("/", getUsers) ;

router.patch("/:id", updateUser) ;
router.get("/init-user", auth, async(req,res)=>{
  const user = req.user;
  try{
  const dbUser = await User.findById(user.id);
  res.send(dbUser);
}
  catch(error){
    res.status(400).send("error");
  }})

module.exports = router;


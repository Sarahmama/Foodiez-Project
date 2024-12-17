const express = require("express");
const router = express.Router();
const passport = require("passport");
const { registerUser, logoutUser, loginUser } = require("./auth.controller");

router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  loginUser
);

module.exports = router;

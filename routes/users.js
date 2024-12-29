const express = require("express");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utilities/catchAsync");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.flash("success", "Welcome to YelpCamp!");
    res.redirect("/campgrounds"); // sends a response, next not needed
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
});

module.exports = router;

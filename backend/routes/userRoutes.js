const express = require("express");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// @route POST /api/user/register
// @desc Register a new User
// @access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration logic
    let user = await UserModel.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = new UserModel({ name, email, password });
    await user.save();

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

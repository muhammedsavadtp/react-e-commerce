const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/verifyToken");
const generateToken = require("../config/generateToken");

router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    if (!(email && password && first_name && last_name)) {
      return res.status(400).json("All input is required");
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).json("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const payload = { user_id: user._id, email };
    const token = generateToken(payload, "2h");
    user.token = token;
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate user input
    if (!(email && password)) {
      return res.status(400).json("All input is required");
    }

    // email format validation using regex
    if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json("Invalid email format");
    }

    // validate if user exists in our database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json("User not found");
    }

    // check if user password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json("Invalid password");
    }

    // if user & password is correct, create a token
    if (user && isPasswordMatch) {
      const payload = { user_id: user._id, email };
      const token = generateToken(payload, "2h");
      user.token = token;
      await user.save();
      return res.status(200).json(user);
    }

    return res.status(400).json("Invalid credentials");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;

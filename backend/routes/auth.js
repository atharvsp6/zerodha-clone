const express = require("express");
const UserModel = require("../model/UserModel");
const { hashPassword, verifyPassword, signToken } = require("../utils/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body || {};

    if (!email || !password || !name) {
      return res.status(400).json({ message: "Email, password, and name are required." });
    }

    const existing = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({ message: "Email already registered." });
    }

    const passwordHash = await hashPassword(password);

    const user = await UserModel.create({
      email: email.toLowerCase().trim(),
      name: name.trim(),
      passwordHash,
    });

    const token = signToken({ sub: user._id.toString() });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Failed to register user." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = signToken({ sub: user._id.toString() });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Failed to login." });
  }
});

module.exports = router;
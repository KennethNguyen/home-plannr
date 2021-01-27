const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username: username });

    if (!existingUser) {
      return res.status(409).json({ error: "User doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Wrong password" });
    }

    const token = jwt.sign(
      { username, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "2hr" }
    );

    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

const signup = async (req, res) => {
  const { houseName, username, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists." });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({ error: "Passwords don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = await User.create({
      username,
      houseName,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { username: createdUser.username, id: createdUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "2hr" }
    );

    res.status(201).json({ createdUser, token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

module.exports = { login, signup };

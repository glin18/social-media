import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, password2 } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (password !== password2) {
      return res.status(400).json({ message: "Passwords are not the same" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password is too short" });
    }
    if (!firstName || !email || !lastName) {
      return res.status(400).json({ message: "Please fill all sections" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    console.log("User created");
    const savedUser = await newUser.save();
    console.log("User saved");
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logging in
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User does not exist" });
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

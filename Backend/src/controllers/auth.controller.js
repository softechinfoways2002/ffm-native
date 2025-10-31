const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
  try {
    const { username, password } = req.body;

   
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, { httpOnly: true, secure: false });

    return res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    console.error("Register error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

 
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

 
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "Invalid credentials" });

  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

   
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, { httpOnly: true, secure: false });

    return res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  register,
  login,
};

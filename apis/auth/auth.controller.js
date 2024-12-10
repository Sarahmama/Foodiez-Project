const jwt = require("jsonwebtoken");
const User = require("../../models/User");

exports.signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      console.error("User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }
    console.log(username);
    // Validate password
    console.log(user, "user");
    const isPasswordValid = await user.comparePassword(password);
    console.log("Password Valid:", isPasswordValid);

    if (!isPasswordValid) {
      console.error("Invalid Password");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};

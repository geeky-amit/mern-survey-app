const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../Config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, profession, password } = req.body;

  if (!name || !email || !phone || !profession || !password) {
    throw new Error("Please enter all the required fields");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    profession,
    password
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      profession: user.profession,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Failed to Registere User");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      profession: user.profession,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = { registerUser, loginUser };

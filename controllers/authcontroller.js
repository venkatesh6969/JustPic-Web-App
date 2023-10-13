import { compare, hash } from "bcrypt";
import { comparepassword, hashpassword } from "../helpers/authhelper.js";
import usermodel from "../models/usermodel.js";
import JWT from "jsonwebtoken";

export const registercontroller = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "Already registered...please login",
      });
    }
    const hashedPassword = await hashpassword(password);
    const user = await new usermodel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};

export const logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparepassword(password, user.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};

export const testController = (req ,res) => {
  res.send("Protected Routes");
};
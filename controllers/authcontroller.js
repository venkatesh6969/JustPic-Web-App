import { hashpassword } from "../helpers/authhelper.js";
import usermodel from "../models/usermodel.js";

export const registercontroller = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone Number is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }
    const existinguser = await usermodel.findOne({ email });
    if (existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered...please login",
      });
    }
    const hashedpassword = await hashpassword(password);
    const user = await new usermodel({
      name,
      email,
      phone,
      address,
      password: hashedpassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registed Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      Message: "Error in Registration",
      error,
    });
  }
};

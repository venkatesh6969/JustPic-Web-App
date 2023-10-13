import JWT from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

export const requireSignin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Token is missing.",
    });
  }

  try {
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Token has expired.",
      });
    }

    res.status(401).json({
      success: false,
      message: "Unauthorized. Invalid token.",
    });
  }
};

export const isadmin = async (req, res, next) => {
  try {
    const user = await usermodel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "unauthorised Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

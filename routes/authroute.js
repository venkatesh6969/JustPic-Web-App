import express from "express";
import { registercontroller, logincontroller , testController } from "../controllers/authcontroller.js";
import { isadmin, requireSignin } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/register", registercontroller);
router.post("/login", logincontroller );
router.get("/test", requireSignin,isadmin ,testController);

export default router;

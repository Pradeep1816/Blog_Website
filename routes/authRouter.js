import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";

const router = express.Router();
// Registration Router
router.post("/register", registerController);
// Login Router
router.post("/login", loginController);

export default router;

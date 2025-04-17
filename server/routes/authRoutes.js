import express from "express";
import { register, login, getUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, getUser); // protected route

export default router;

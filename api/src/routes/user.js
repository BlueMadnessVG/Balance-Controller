import { Router } from "express";
import {
  getUser,
  loginUser,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

// Public routes
router.post("/login", loginUser);
//Protected Routes
router.get("/user", verifyToken, getUser);
router.put("/user", updateUser);

export default router;

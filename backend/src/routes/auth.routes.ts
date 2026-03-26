import { Router } from "express";
import {
  loginController,
  logoutController,
  meController,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const authRoutes = Router();

authRoutes.post("/login", loginController);
authRoutes.get("/me", authMiddleware, meController);
authRoutes.post("/logout", logoutController);

export default authRoutes;
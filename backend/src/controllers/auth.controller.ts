import type { Request, Response } from "express";
import { getMeService, loginService } from "../services/auth.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const { token, user } = await loginService({ email, password });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    return res.status(401).json({
      message:
        error instanceof Error ? error.message : "Authentication failed",
    });
  }
}

export async function meController(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await getMeService(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export function logoutController(req: Request, res: Response) {
  res.clearCookie("token");

  return res.status(200).json({
    message: "Logout successful",
  });
}
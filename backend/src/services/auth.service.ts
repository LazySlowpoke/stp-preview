import pool from "../database/db";
import { comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";
import type { LoginBody } from "../interfaces/auth.interface";

export async function loginService({ email, password }: LoginBody) {
  const result = await pool.query(
    "SELECT id, name, email, password FROM users WHERE email = $1",
    [email]
  );

  const user = result.rows[0];

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

export async function getMeService(userId: string) {
  const result = await pool.query(
    "SELECT id, name, email FROM users WHERE id = $1",
    [userId]
  );

  return result.rows[0] || null;
}
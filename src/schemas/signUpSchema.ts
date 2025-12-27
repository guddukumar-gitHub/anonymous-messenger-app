import { z } from "zod";

export const usernameSchemaValidation = z
  .string()
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")
  .min(3, "Username must be at least 3 characters long")
  .max(30, "Username must be at most 30 characters long");

export const emailSchemaValidation = z
  .string()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
  .email("Please enter a valid email address");

export const passwordSchemaValidation = z
  .string()
  .min(6, "Password must be at least 6 characters long");

export const signUpSchema = z.object({
  username: usernameSchemaValidation,
  email: emailSchemaValidation,
  password: passwordSchemaValidation,
});

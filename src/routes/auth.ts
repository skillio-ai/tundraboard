import { Router } from "express";

export const authRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement authentication endpoints
//
// POST /auth/register
//   - Accept: { email, password, displayName }
//   - Hash the password with bcryptjs
//   - Create the user in the database
//   - Return the created user (without password hash)
//
// POST /auth/login
//   - Accept: { email, password }
//   - Verify credentials against the database
//   - Generate a JWT token
//   - Return: { token, user }
//
// Hint: Use zod for input validation, bcryptjs for password hashing,
//       and jsonwebtoken for token generation.
// ---------------------------------------------------------------------------

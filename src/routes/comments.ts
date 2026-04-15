import { Router } from "express";

export const commentRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement comment endpoints
//
// POST   /tasks/:taskId/comments — Add a comment to a task
// GET    /tasks/:taskId/comments — List comments on a task
// PATCH  /comments/:id           — Edit a comment (author only)
// DELETE /comments/:id           — Delete a comment (author only)
//
// Authorization:
//   - Any workspace member can read and add comments
//   - Only the comment author can edit or delete their own comments
//   - Admins can delete any comment
// ---------------------------------------------------------------------------

import { Router } from "express";

export const projectRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement project endpoints
//
// POST   /projects            — Create a project in a workspace
// GET    /projects             — List projects (filtered by workspace)
// GET    /projects/:id        — Get project details with task summary
// PATCH  /projects/:id        — Update project
// DELETE /projects/:id        — Archive a project (soft delete)
//
// Authorization:
//   - Only workspace members can view or create projects
//   - Only admins and members (not viewers) can create or update
// ---------------------------------------------------------------------------

import { Router } from "express";

export const workspaceRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement workspace endpoints
//
// POST   /workspaces          — Create a new workspace (authenticated)
// GET    /workspaces          — List workspaces the user is a member of
// GET    /workspaces/:id      — Get workspace details
// PATCH  /workspaces/:id      — Update workspace (admin only)
// POST   /workspaces/:id/members — Add a member to the workspace
// DELETE /workspaces/:id/members/:userId — Remove a member
//
// Authorization:
//   - Users can only see workspaces they are members of
//   - Only workspace admins can update settings or manage members
//   - The creator of a workspace is automatically an admin
// ---------------------------------------------------------------------------

import { Router } from "express";

export const labelRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement label endpoints
//
// POST   /workspaces/:workspaceId/labels — Create a label
// GET    /workspaces/:workspaceId/labels — List labels in a workspace
// PATCH  /labels/:id                     — Update a label
// DELETE /labels/:id                     — Delete a label
//
// POST   /tasks/:taskId/labels/:labelId  — Apply a label to a task
// DELETE /tasks/:taskId/labels/:labelId  — Remove a label from a task
//
// Labels are workspace-scoped — each workspace has its own set of labels.
// Label names must be unique within a workspace.
// ---------------------------------------------------------------------------

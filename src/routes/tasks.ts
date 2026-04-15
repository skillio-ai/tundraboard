import { Router } from "express";

export const taskRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement task endpoints
//
// POST   /tasks               — Create a task in a project
//   Required: title, projectId
//   Optional: description, priority, assigneeId, dueDate
//   Validation: title (1-200 chars), priority (low|medium|high|urgent)
//
// GET    /tasks               — List tasks with filtering and pagination
//   Filters: projectId, status, priority, assigneeId, labels
//   Sorting: createdAt, dueDate, priority
//   Pagination: cursor-based (recommended) or offset-based
//
// GET    /tasks/:id           — Get task details with comments
// PATCH  /tasks/:id           — Update task fields
// DELETE /tasks/:id           — Delete a task
//
// Authorization:
//   - Only workspace members can view tasks in their workspace's projects
//   - Only admins and members (not viewers) can create, update, or delete
//   - Validate that projectId belongs to a workspace the user has access to
//
// Important:
//   - Do NOT pass req.body directly to prisma — use an explicit field allowlist
//   - Validate all input with zod schemas
//   - Return appropriate status codes: 201 (created), 400 (validation),
//     403 (forbidden), 404 (not found), 422 (invalid reference)
// ---------------------------------------------------------------------------

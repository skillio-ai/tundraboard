import { Router } from "express";

export const notificationRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement notification endpoints
//
// GET    /notifications       — List notifications for the current user
// PATCH  /notifications/:id   — Mark a notification as read
// POST   /notifications/read-all — Mark all notifications as read
//
// Notifications are created automatically when:
//   - A task is assigned to a user (task_assigned)
//   - A comment is added to a task the user is involved in (comment_added)
//   - A task's due date is approaching (task_due)
//   - A user is mentioned in a comment (mention)
// ---------------------------------------------------------------------------

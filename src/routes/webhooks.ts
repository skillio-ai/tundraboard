import { Router } from "express";

export const webhookRouter = Router();

// ---------------------------------------------------------------------------
// TODO: Implement webhook endpoints
//
// POST   /workspaces/:workspaceId/webhooks — Register a webhook
// GET    /workspaces/:workspaceId/webhooks — List webhooks
// PATCH  /webhooks/:id                     — Update a webhook
// DELETE /webhooks/:id                     — Delete a webhook
//
// Webhook delivery:
//   - When a subscribed event occurs, POST the event payload to the webhook URL
//   - Sign the payload with HMAC-SHA256 using the webhook's secret
//   - Include the signature in the X-TundraBoard-Signature header
//   - Retry failed deliveries with exponential backoff (3 attempts)
//
// Supported events: task.created, task.updated, task.deleted,
//                   comment.added, project.created, project.archived
// ---------------------------------------------------------------------------

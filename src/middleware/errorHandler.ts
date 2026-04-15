import type { ErrorRequestHandler } from "express";

/**
 * Global error handler. Catches errors thrown or passed via next(error)
 * and returns a consistent JSON response.
 */
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = err.status ?? err.statusCode ?? 500;
  const message = err.message ?? "Internal server error";

  if (process.env.NODE_ENV !== "test") {
    console.error(`[${status}] ${message}`, err.stack);
  }

  res.status(status).json({
    error: {
      message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
};

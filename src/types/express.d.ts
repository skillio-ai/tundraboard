// Extend Express Request to include the authenticated user
declare namespace Express {
  interface Request {
    user?: {
      id: string;
      email: string;
      displayName: string;
    };
  }
}

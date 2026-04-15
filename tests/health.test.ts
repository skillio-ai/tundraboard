import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("GET /health", () => {
  it("should return status ok with version and timestamp", async () => {
    const res = await request(app).get("/health").expect(200);

    expect(res.body).toHaveProperty("status", "ok");
    expect(res.body).toHaveProperty("version");
    expect(res.body).toHaveProperty("timestamp");
    expect(new Date(res.body.timestamp).getTime()).not.toBeNaN();
  });
});

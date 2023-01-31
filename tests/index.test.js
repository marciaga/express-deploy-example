import request from "supertest";

import app from "../src";

import { cats } from "../src/routes/cat";

describe("/cats endpoint", () => {
  test("It should respond with a 200 when making a GET", async () => {
    const response = await request(app).get("/cats");

    expect(response.statusCode).toBe(200);
    expect(response.body.cats).toStrictEqual(cats);
  });
});

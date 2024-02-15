import { app } from "@/app";
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";
import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Search nearby gym e2e", () => {
  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });

  it("should be able to list nearby gyms", async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    await request(app.server)
      .post("/gyms")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "A",
        description: "B",
        phone: "1322231312",
        latitude: "-27.2092052",
        longitude: "-49.6401091",
      });

    await request(app.server)
      .post("/gyms")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "AA",
        description: "BB",
        phone: "1322232323",
        latitude: "-27.0610928",
        longitude: "-49.5229501",
      });

    const response = await request(app.server)
      .get("/gyms/nearby")
      .query({ latitude: "-27.2092052", longitude: "-49.6401091" })
      .set("Authorization", `Bearer ${token}`)
      .send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.gyms).toHaveLength(1);
    expect(response.body.gyms).toEqual([
      expect.objectContaining({ title: "A" }),
    ]);
  });
});

import { expect, use } from "chai";
import chaiHttp from "chai-http";
const request = require("supertest");
import app from "../src/app";
import "dotenv/config";
import { newUser } from "./mocks/user.mocks";

use(chaiHttp);

describe("USER AUTH", async () => {
  it("should register new user", (done) => {
    request(app)
      .post("/api/v1/user/register")
      .send(newUser)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        done();
      });
  });
});

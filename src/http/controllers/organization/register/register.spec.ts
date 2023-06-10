import { app } from "@/app"
import request from "supertest"

describe("Register (e2e)", () => {
  it("should be able to register", async () => {
    const response = await request(app).post("/organizations").send({
      email: "name@org.com",
      password: "123",
      responsibleName: "John Doe",
      whatsApp: "(11) 99999-9999",
    })

    expect(response.statusCode).toEqual(201)
  })
})

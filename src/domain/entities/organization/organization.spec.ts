import { Phone } from "@/domain/value-objects/phone/phone"
import { Organization } from "./organization"
import { compare } from "bcryptjs"

describe("Organization suit", () => {
  it("should be able to create an organization", () => {
    const organization = Organization.create({
      email: "email@example.com",
      password: "123456",
      responsibleName: "John Doe",
      whatsApp: new Phone("(11) 99999-9999"),
    })

    expect(organization.responsibleName).toBe("John Doe")
    expect(organization).toBeInstanceOf(Organization)
  })

  it("should correctly hash the passed password", async () => {
    const password = "123456"

    const organization = Organization.create({
      email: "email@example.com",
      password,
      responsibleName: "John Doe",
      whatsApp: new Phone("(11) 99999-9999"),
    })

    const isPasswordsCorrectlyHashed = await compare(
      password,
      organization.passwordHash
    )

    expect(isPasswordsCorrectlyHashed).toBe(true)
  })
})

import { OrganizationsRepository } from "@/domain/repositories/organizations-repository"
import { RegisterOrganizationUseCase } from "./register-organization"
import { InMemoryOrganizationsRepository } from "@/domain/repositories/in-memory/in-memory-organizations-repository"
import { compare, hash } from "bcryptjs"
import { Organization } from "@/domain/entities/organization/organization"
import { Phone } from "@/domain/value-objects/phone/phone"
import { ValidationError } from "@/core/error"

let sut: RegisterOrganizationUseCase
let organizationsRepository: OrganizationsRepository

describe("Register organization use case", () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new RegisterOrganizationUseCase(organizationsRepository)
  })

  it("should be able to register an organization", async () => {
    const { organization } = await sut.execute({
      email: "email@exemple.com",
      password: "senha",
      responsibleName: "John Doe",
      whatsApp: "+55 (11) 992977104",
    })

    expect(organization.id.toString()).toEqual(expect.any(String))
  })

  it("should hash the org password on registration", async () => {
    const password = "123456"

    const { organization } = await sut.execute({
      email: "email@exemple.com",
      password,
      responsibleName: "John Doe",
      whatsApp: "+55 (11) 992977104",
    })

    const isPasswordsCorrectlyHashed = await compare(
      password,
      organization.passwordHash
    )

    expect(isPasswordsCorrectlyHashed).toBe(true)
  })

  it("should not be able to register 2 organizations with the same email", async () => {
    const email = "email@example.com"

    organizationsRepository.create(
      Organization.create({
        email,
        password: "12345",
        responsibleName: "John Doe",
        whatsApp: new Phone("+55 (11) 99297-7104"),
      })
    )

    expect(async () => {
      await sut.execute({
        email,
        password: "123456",
        responsibleName: "John Doe",
        whatsApp: "+55 (11) 992977104",
      })
    }).rejects.toBeInstanceOf(ValidationError)
  })
})

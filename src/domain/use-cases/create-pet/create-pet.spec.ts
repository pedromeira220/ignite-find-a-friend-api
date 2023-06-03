import { OrganizationsRepository } from "@/domain/repositories/organizations-repository"
import { CreatePetUseCase } from "./create-pet"
import { PetsRepository } from "@/domain/repositories/pets-repository"
import { InMemoryOrganizationsRepository } from "@/domain/repositories/in-memory/in-memory-organizations-repository"
import { InMemoryPetsRepository } from "@/domain/repositories/in-memory/in-memory-pets-repository"
import { Organization } from "@/domain/entities/organization/organization"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Phone } from "@/domain/value-objects/phone/phone"
import { NotFoundError } from "@/core/error"

let organizationsRepository: OrganizationsRepository
let petsRepository: PetsRepository
let sut: CreatePetUseCase

describe("Create pet use case", () => {
  beforeAll(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    petsRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petsRepository, organizationsRepository)
  })

  it("should be possible to create an pet", async () => {
    const organization = await organizationsRepository.create(
      Organization.create({
        addressId: new UniqueEntityId(),
        email: "email@example.com",
        password: "123",
        responsibleName: "John Doe",
        whatsApp: new Phone("+55 (11) 999297-7104"),
      })
    )

    const { pet } = await sut.execute({
      about: "Sobre meu pet",
      adoptionRequisites: ["requisito 1"],
      age: "puppy",
      energyLevel: "fussy",
      environment: "roomy",
      independenceLevel: "low",
      name: "My pet",
      organizationId: organization.id.toString(),
      size: "large",
    })

    expect(pet.organizationId.toString()).toBe(organization.id.toString())
  })

  it("should not be able to create an pet with an non exist organization", async () => {
    expect(async () => {
      const { pet } = await sut.execute({
        about: "Sobre meu pet",
        adoptionRequisites: ["requisito 1"],
        age: "puppy",
        energyLevel: "fussy",
        environment: "roomy",
        independenceLevel: "low",
        name: "My pet",
        organizationId: new UniqueEntityId().toString(),
        size: "large",
      })
    }).rejects.toBeInstanceOf(NotFoundError)
  })
})

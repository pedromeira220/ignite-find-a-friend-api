import { PetsRepository } from "@/domain/repositories/pets-repository"
import { InMemoryPetsRepository } from "@/domain/repositories/in-memory/in-memory-pets-repository"
import { GetPetUseCase } from "./get-pet"
import { makePet } from "test/factories/make-pet"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { NotFoundError } from "@/core/error"

let petsRepository: PetsRepository
let sut: GetPetUseCase

describe("Get pet use case", () => {
  beforeAll(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetUseCase(petsRepository)
  })

  it("should be able to get an pet", async () => {
    const previousCreatedPet = await petsRepository.create(makePet())

    const { pet } = await sut.execute({
      petId: previousCreatedPet.id.toString(),
    })

    expect(pet.id.toString()).toBe(previousCreatedPet.id.toString())
  })

  it("should not be able to get an non exist pet", async () => {
    expect(async () => {
      await sut.execute({
        petId: new UniqueEntityId().toString(),
      })
    }).rejects.toBeInstanceOf(NotFoundError)
  })
})

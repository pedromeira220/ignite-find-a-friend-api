import { About } from "@/domain/value-objects/about/about"
import { Pet } from "./pet"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

describe("Pet suit", () => {
  it("'should be possible to create an pet", () => {
    const pet = Pet.create({
      about: new About("An exemple text"),
      adoptionRequisites: ["requisite 1", "requisite 2"],
      age: "puppy",
      energyLevel: "calm",
      environment: "large",
      independenceLevel: "high",
      name: "My pet",
      size: "large",
      organizationId: new UniqueEntityId(),
    })

    expect(pet.name).toBe("My pet")
    expect(pet).toBeInstanceOf(Pet)
  })
})

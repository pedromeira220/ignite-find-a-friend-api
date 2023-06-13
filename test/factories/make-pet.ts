import { faker } from "@faker-js/faker"
import { Pet, PetProps } from "@/domain/entities/pet/pet"
import { About } from "@/domain/value-objects/about/about"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

export function makePet(override: Partial<PetProps> = {}, id?: UniqueEntityId) {
  const pet = Pet.create(
    {
      about: new About(faker.lorem.sentence()),
      adoptionRequisites: [faker.lorem.text(), faker.lorem.text()],
      age: "puppy",
      energyLevel: "calm",
      environment: "large",
      independenceLevel: "high",
      name: faker.person.firstName(),
      size: "large",
      organizationId: new UniqueEntityId(),
      ...override,
    },
    id
  )

  return pet
}

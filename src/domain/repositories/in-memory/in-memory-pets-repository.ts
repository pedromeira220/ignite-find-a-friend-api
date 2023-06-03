import { Pet } from "@/domain/entities/pet/pet"
import { PetsRepository } from "../pets-repository"

export class InMemoryPetsRepository implements PetsRepository {
  private items: Pet[] = []
  async findById(id: string): Promise<Pet | null> {
    const pet = this.items.find((pet) => pet.id.toString() == id)

    if (!pet) {
      return null
    }

    return pet
  }

  async create(pet: Pet): Promise<Pet> {
    this.items.push(pet)

    return pet
  }
}

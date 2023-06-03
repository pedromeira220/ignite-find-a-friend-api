import { Pet } from "@/domain/entities/pet/pet"
import { PetsRepository } from "../pets-repository"

export class InMemoryPetsRepository implements PetsRepository {
  private items: Pet[] = []

  async create(pet: Pet): Promise<void> {
    this.items.push(pet)
  }
}

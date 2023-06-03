import { Pet } from "../entities/pet/pet"

export interface PetsRepository {
  create(pet: Pet): Promise<Pet>
  findById(id: string): Promise<Pet | null>
}

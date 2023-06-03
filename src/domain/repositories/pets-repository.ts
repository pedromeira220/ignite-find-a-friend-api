import { Pet } from "../entities/pet/pet"

export interface PetsRepository {
  create(pet: Pet): Promise<void>
}

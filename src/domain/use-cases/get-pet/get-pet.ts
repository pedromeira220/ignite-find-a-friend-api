import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { NotFoundError } from "@/core/error"
import {
  Age,
  EnergyLevel,
  Environment,
  IndependenceLevel,
  Pet,
  Size,
} from "@/domain/entities/pet/pet"
import { OrganizationsRepository } from "@/domain/repositories/organizations-repository"
import { PetsRepository } from "@/domain/repositories/pets-repository"
import { About } from "@/domain/value-objects/about/about"

interface GetPetUseCaseRequest {
  petId: string
}

interface GetPetUseCaseResponse {
  pet: Pet
}

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    petId,
  }: GetPetUseCaseRequest): Promise<GetPetUseCaseResponse> {
    const doesThePetExists = await this.petsRepository.findById(petId)

    if (!doesThePetExists) {
      throw new NotFoundError({
        message: "Pet não encontrado",
        action: "Verifique se passou o id correto do pet",
      })
    }

    const pet = doesThePetExists

    return {
      pet: doesThePetExists,
    }
  }
}

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

interface CreatePetUseCaseRequest {
  name: string
  about: string
  age: Age
  size: Size
  energyLevel: EnergyLevel
  adoptionRequisites: string[]
  independenceLevel: IndependenceLevel
  environment: Environment
  organizationId: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(
    private petsRepository: PetsRepository,
    private organizationsRepository: OrganizationsRepository
  ) {}

  async execute({
    about,
    adoptionRequisites,
    age,
    energyLevel,
    environment,
    independenceLevel,
    name,
    size,
    organizationId,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const doesTheOrganizationExist =
      await this.organizationsRepository.findById(organizationId)

    if (!doesTheOrganizationExist) {
      throw new NotFoundError({
        message: "Organização não encontrada",
        action: "Verifique se passou o id correto da organização",
      })
    }

    const pet = Pet.create({
      about: new About(about),
      adoptionRequisites,
      age,
      energyLevel,
      environment,
      independenceLevel,
      name,
      organizationId: new UniqueEntityId(organizationId),
      size,
    })

    await this.petsRepository.create(pet)

    return {
      pet,
    }
  }
}

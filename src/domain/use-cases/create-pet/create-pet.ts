import { Pet } from "@/domain/entities/pet/pet"

interface CreatePetUseCaseRequest {
  name: string
  about: string
  age: string
  size: string
  energyLevel: number
  adoptionRequisites: string[]
  independenceLevel: string
  environment: string
}

interface CreatePetUseCaseResponse {}

export class CreatePetUseCase {
  async execute({
    about, 
    adoptionRequisites,
    age,
    energyLevel,
    environment,
    independenceLevel,
    name,
    size
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {

    const pet = Pet.create({
      about:, 
    adoptionRequisites,
    age,
    energyLevel,
    environment,
    independenceLevel,
    name,
    size
    })

    return {}
  }
}

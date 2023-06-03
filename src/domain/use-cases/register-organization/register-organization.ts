import { ValidationError } from "@/core/error"
import { Organization } from "../../entities/organization/organization"
import { OrganizationsRepository } from "../../repositories/organizations-repository"
import { Phone } from "../../value-objects/phone/phone"
import { hash } from "bcryptjs"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

interface RegisterOrganizationUseCaseRequest {
  responsibleName: string
  email: string
  // TODO: adicionar endereço
  whatsApp: string
  password: string
}

interface RegisterOrganizationUseCaseResponse {
  organization: Organization
}

export class RegisterOrganizationUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({
    email,
    password,
    responsibleName,
    whatsApp,
  }: RegisterOrganizationUseCaseRequest): Promise<RegisterOrganizationUseCaseResponse> {
    const organizationWithSameEmail =
      await this.organizationsRepository.findByEmail(email)

    if (!!organizationWithSameEmail) {
      throw new ValidationError({
        message: "O email informado já esta em uso.",
        action: "Tente outro email",
      })
    }

    const organization = Organization.create({
      email,
      password,
      responsibleName,
      whatsApp: new Phone(whatsApp),
      addressId: new UniqueEntityId(),
    })

    await this.organizationsRepository.create(organization)

    return {
      organization,
    }
  }
}

import { Organization } from "@/domain/entities/organization/organization"
import { OrganizationsRepository } from "../organizations-repository"

export class InMemoryOrganizationsRepository
  implements OrganizationsRepository
{
  private items: Organization[] = []

  async findById(id: string): Promise<Organization | null> {
    const organization = this.items.find((org) => org.id.toString() == id)

    if (!organization) {
      return null
    }

    return organization
  }

  async create(organization: Organization): Promise<Organization> {
    this.items.push(organization)

    return organization
  }
  async findByEmail(email: string): Promise<Organization | null> {
    const organization = this.items.find((org) => org.email == email)

    if (!organization) {
      return null
    }

    return organization
  }
}

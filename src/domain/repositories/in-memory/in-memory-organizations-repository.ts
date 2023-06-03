import { Organization } from "@/domain/entities/organization/organization"
import { OrganizationsRepository } from "../organizations-repository"

export class InMemoryOrganizationsRepository
  implements OrganizationsRepository
{
  private items: Organization[] = []

  async create(organization: Organization): Promise<void> {
    this.items.push(organization)
  }
  async findByEmail(email: string): Promise<Organization | null> {
    const organization = this.items.find((org) => org.email == email)

    if (!organization) {
      return null
    }

    return organization
  }
}

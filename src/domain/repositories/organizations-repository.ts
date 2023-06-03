import { Organization } from "../entities/organization/organization"
export interface OrganizationsRepository {
  create(organization: Organization): Promise<void>
  findByEmail(email: string): Promise<Organization | null>
}

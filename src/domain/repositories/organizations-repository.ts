import { Organization } from "../entities/organization/organization"
export interface OrganizationsRepository {
  create(organization: Organization): Promise<Organization>
  findByEmail(email: string): Promise<Organization | null>
  findById(id: string): Promise<Organization | null>
}

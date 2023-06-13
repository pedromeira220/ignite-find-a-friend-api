import { Organization } from "@/domain/entities/organization/organization"

export class OrganizationViewModel {
  static toHttp(organization: Organization) {
    return {
      email: organization.email,
      id: organization.id.toValue(),
      responsibleName: organization.responsibleName,
      whatsApp: organization.whatsApp.toValue(),
    }
  }
}

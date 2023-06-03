import { Entity } from "@/core/entities/entity/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"
import { Phone } from "@/domain/value-objects/phone/phone"
import { hash, hashSync } from "bcryptjs"

interface OrganizationProps {
  responsibleName: string
  email: string
  addressId: UniqueEntityId
  whatsApp: Phone
  passwordHash: string
  password: string
}

export class Organization extends Entity<OrganizationProps> {
  get responsibleName() {
    return this.props.responsibleName
  }

  get email() {
    return this.props.email
  }

  get addressId() {
    return this.props.addressId
  }

  get whatsApp() {
    return this.props.whatsApp
  }

  get passwordHash() {
    return this.props.passwordHash
  }

  static create(
    props: Optional<OrganizationProps, "passwordHash">,
    id?: UniqueEntityId
  ) {
    const organization = new Organization({
      passwordHash: props.passwordHash ?? hashSync(props.password, 6),
      ...props,
    })

    return organization
  }
}

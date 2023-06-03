import { Entity } from "@/core/entities/entity/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

interface AddressProps {
  street: string
  city: string
  number: string
  state: string
  country: string
  complement?: string
  zipCode: string
  latitude?: string
  longitude?: string
}

export class Address extends Entity<AddressProps> {
  get street() {
    return this.props.street
  }

  get city() {
    return this.props.city
  }
  get number() {
    return this.props.number
  }
  get state() {
    return this.props.state
  }
  get country() {
    return this.props.country
  }
  get complement() {
    return this.props.complement
  }
  get zipCode() {
    return this.props.zipCode
  }
  get latitude() {
    return this.props.latitude
  }
  get longitude() {
    return this.props.longitude
  }

  static create(props: AddressProps, id?: UniqueEntityId) {
    return new Address({
      ...props,
    })
  }
}

import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { About } from "@/domain/value-objects/about/about"
import { Entity } from "../entity/entity"
import { Optional } from "@/core/types/optional"

// TODO: adicionar a possibilidade de anexar fotos a um pet

interface PetProps {
  id: UniqueEntityId
  name: string
  about: About
  age: "puppy" | "adult" | "elderly" | "unknown"
  size: "small" | "medium" | "large"
  energyLevel: number
  adoptionRequisites: string[]
  independenceLevel: "low" | "medium" | "high"
  environment: "spacious" | "large" | "roomy"
  createdAt: Date
}

export class Pet extends Entity<PetProps> {
  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  get about() {
    return this.props.about
  }

  get age() {
    return this.props.age
  }
  get size() {
    return this.props.size
  }
  get energyLevel() {
    return this.props.energyLevel
  }
  get adoptionRequisites() {
    return this.props.adoptionRequisites
  }
  get independenceLevel() {
    return this.props.independenceLevel
  }
  get environment() {
    return this.props.environment
  }

  static create(props: Optional<PetProps, "createdAt">, id?: UniqueEntityId) {
    const pet = new Pet(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    )

    return pet
  }
}

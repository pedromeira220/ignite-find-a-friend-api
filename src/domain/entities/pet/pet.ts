import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { About } from "@/domain/value-objects/about/about"
import { Entity } from "../../../core/entities/entity/entity"
import { Optional } from "@/core/types/optional"

// TODO: adicionar a possibilidade de anexar fotos a um pet

type Age = "puppy" | "adult" | "elderly" | "unknown"

type Size = "small" | "medium" | "large"

type EnergyLevel = "calm" | "peaceful" | "fussy"

type IndependenceLevel = "low" | "medium" | "high"

type Environment = "spacious" | "large" | "roomy"

interface PetProps {
  name: string
  about: About
  age: Age
  size: Size
  energyLevel: EnergyLevel
  adoptionRequisites: string[]
  independenceLevel: IndependenceLevel
  environment: Environment
  createdAt: Date
}

export class Pet extends Entity<PetProps> {
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
        createdAt: props.createdAt ?? new Date(),
      },
      id
    )

    return pet
  }
}

import { randomUUID } from "node:crypto"

export class UniqueEntityId {
  private value: string

  public toString() {
    return this.value
  }

  public toValue() {
    return this.value
  }

  constructor(value?: string) {
    if (!!value) {
      this.value = value
    } else {
      this.value = randomUUID()
    }
  }
}

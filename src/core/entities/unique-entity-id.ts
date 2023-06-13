import { randomUUID } from "node:crypto"

export class UniqueEntityId {
  private _value: string

  public toString() {
    return this._value
  }

  public toValue() {
    return this._value
  }

  constructor(value?: string) {
    if (!!value) {
      this._value = value
    } else {
      this._value = randomUUID()
    }
  }
}

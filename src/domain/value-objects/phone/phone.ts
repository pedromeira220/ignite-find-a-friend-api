import { TextUtil } from "@/utils/TextUtil/TextUtil"

export class Phone {
  private _value!: string

  set value(value: string) {
    this._value = TextUtil.onlyNumbers(value)
  }

  toString() {
    return this._value
  }

  toValue() {
    return this._value
  }

  constructor(value: string) {
    this.value = value
  }
}

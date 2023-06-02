import { ValidationError } from "@/core/error"

export class About {
  private _text!: string

  set text(value: string) {
    const MAX_CHARACTERS = 300

    if (value.length >= MAX_CHARACTERS) {
      throw new ValidationError({
        message: `Sobre precisa ter no máximo ${MAX_CHARACTERS} caracteres`,
        action: "Diminua a caracteres para se adequar ao limite",
      })
    }

    this._text = value
  }

  get text() {
    return this._text
  }

  constructor(text: string) {
    this.text = text
  }
}

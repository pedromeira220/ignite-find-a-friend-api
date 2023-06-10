import { BaseError } from "@/core/error"

export class Response<Data> {
  private _success: boolean
  private _errors: BaseError[] = []
  private _data!: Data

  private constructor() {
    this._success = true
  }

  set data(data: Data) {
    this._data = data
  }

  static fromData<Data>(data: Data): Response<Data> {
    const instance = new Response<Data>()
    instance.data = data
    return instance
  }

  static fromError(errors: BaseError[]) {
    const instance = new Response()
    instance._errors = errors
    instance._success = false

    return instance
  }

  toJson() {
    return {
      errors: this._errors.map((error) => error.toJson()),
      success: this._success,
      data: this._data ?? {},
    }
  }
}

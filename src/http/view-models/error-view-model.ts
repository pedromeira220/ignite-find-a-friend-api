import { BaseError } from "@/core/error"

export class ErrorViewModel {
  static toHttp(error: BaseError) {
    return {
      message: error.message,
      action: error.action,
      errorLocationCode: error.errorLocationCode,
      name: error.name,
    }
  }
}

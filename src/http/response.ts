export class Response<Data> {
  private success: boolean
  private erros: string[] = []
  private data!: Data

  private constructor() {
    this.success = true
  }

  static fromData<Data>(data: Data): Response<Data> {
    const instance = new Response<Data>()
    instance.data = data
    return instance
  }

  toJson() {
    return {
      erros: this.erros,
      success: this.success,
      data: this.data,
    }
  }
}

type BaseErrorProps = {
  message: string
  statusCode?: number
  action?: string
  errorLocationCode?: string
  stack?: string
}

export class BaseError extends Error {
  private props: BaseErrorProps

  get message(): string {
    return this.message
  }

  get statusCode() {
    return this.props.statusCode
  }

  get action() {
    return this.props.action
  }

  get errorLocationCode() {
    return this.props.errorLocationCode
  }

  get stack() {
    return this.props.stack
  }

  constructor(props: BaseErrorProps) {
    super(props.message)
    this.props = props
  }

  toJson() {
    return {
      message: this.props.message,
      action: this.props.action,
      errorLocationCode: this.props.errorLocationCode,
      stack: this.props.stack,
    }
  }
}

export class InternalServerError extends BaseError {
  constructor({
    message,
    action,
    statusCode,
    stack,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Um erro interno não esperado aconteceu.",
      action: action || "Tente novamente mais tarde",
      statusCode: statusCode || 500,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class NotFoundError extends BaseError {
  constructor({
    message,
    action,
    stack,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Não foi possível encontrar este recurso no sistema.",
      action:
        action ||
        "Verifique se o caminho (PATH) e o método (GET, POST, PUT, DELETE) estão corretos.",
      statusCode: 404,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class ServiceError extends BaseError {
  constructor({
    message,
    action,
    stack,
    statusCode,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Serviço indisponível no momento.",
      action: action || "Verifique se o serviço está disponível.",
      stack: stack,
      statusCode: statusCode || 503,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class ValidationError extends BaseError {
  constructor({
    message,
    action,
    stack,
    statusCode,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Um erro de validação ocorreu.",
      action: action || "Ajuste os dados enviados e tente novamente.",
      statusCode: statusCode || 400,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class UnauthorizedError extends BaseError {
  constructor({
    message,
    action,
    stack,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Usuário não autenticado.",
      action:
        action ||
        "Verifique se você está autenticado com uma sessão ativa e tente novamente.",
      statusCode: 401,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class ForbiddenError extends BaseError {
  constructor({
    message,
    action,
    stack,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Você não possui permissão para executar esta ação.",
      action:
        action || "Verifique se você possui permissão para executar esta ação.",
      statusCode: 403,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class TooManyRequestsError extends BaseError {
  constructor({
    message,
    action,
    stack,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Você realizou muitas requisições recentemente.",
      action: action || "Tente novamente mais tarde.",
      statusCode: 429,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

export class UnprocessableEntityError extends BaseError {
  constructor({
    message,
    action,
    stack,
    errorLocationCode,
  }: Partial<BaseErrorProps>) {
    super({
      message: message || "Não foi possível realizar esta operação.",
      action:
        action ||
        "Os dados enviados estão corretos, porém não foi possível realizar esta operação.",
      statusCode: 422,
      stack: stack,
      errorLocationCode: errorLocationCode,
    })
  }
}

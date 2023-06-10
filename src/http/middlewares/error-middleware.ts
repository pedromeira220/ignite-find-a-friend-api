import { BaseError, InternalServerError, ValidationError } from "@/core/error"
import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express"
import { Response } from "../response"
import { ZodError } from "zod"

export class ErrorMiddleware {
  public static handle(
    error: Error,
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
  ) {
    console.log("> entrou no erro middleware")

    console.error(error)

    if (error instanceof ZodError) {
      return res.status(400).json(
        Response.fromError(
          error.issues.map(
            (issue) =>
              new ValidationError({
                message: `${issue.path}: ${issue.message}`,
              })
          )
        ).toJson()
      )
    }

    if (error instanceof BaseError) {
      return res
        .status(error.statusCode ?? 500)
        .json(Response.fromError([error]).toJson())
    }

    return res
      .status(500)
      .json(Response.fromError([new InternalServerError({})]).toJson())
  }
}

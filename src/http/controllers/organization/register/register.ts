import { InMemoryOrganizationsRepository } from "@/domain/repositories/in-memory/in-memory-organizations-repository"
import { OrganizationsRepository } from "@/domain/repositories/organizations-repository"
import { RegisterOrganizationUseCase } from "@/domain/use-cases/register-organization/register-organization"
import { Response } from "@/http/response"
import { Request as ExpressRequest, Response as ExpressResponse } from "express"
import { z } from "zod"

const register = async (req: ExpressRequest, res: ExpressResponse) => {
  const registerOrganizationBodySchema = z.object({
    responsibleName: z.string(),
    email: z.string().email(),
    whatsApp: z.string(),
    password: z.string(),
  })

  const { email, password, responsibleName, whatsApp } =
    registerOrganizationBodySchema.parse(req.body)

  const organizationsRepository = new InMemoryOrganizationsRepository()

  const registerOrganizationUseCase = new RegisterOrganizationUseCase(
    organizationsRepository
  )

  const { organization } = await registerOrganizationUseCase.execute({
    email,
    password,
    responsibleName,
    whatsApp,
  })

  return res.json(Response.fromData(organization).toJson())
}

export { register }

import { Router } from "express"
import { register } from "./create/create"

const organizationRoutes = Router()

organizationRoutes.post("/", async (req, res) => {
  return register(req, res)
})

export { organizationRoutes }

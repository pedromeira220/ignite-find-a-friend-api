import { Router } from "express"
import { register } from "./register/register"

const organizationRoutes = Router()

organizationRoutes.post("/", async (req, res) => {
  return register(req, res)
})

export { organizationRoutes }

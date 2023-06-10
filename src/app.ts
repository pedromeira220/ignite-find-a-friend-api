import express from "express"
import { organizationRoutes } from "./http/controllers/organization/routes"

const app = express()

app.use(express.json())

app.use("/organizations", organizationRoutes)

export { app }

import "express-async-errors"
import express from "express"
import { organizationRoutes } from "./http/controllers/organization/routes"
import { ErrorMiddleware } from "./http/middlewares/error-middleware"

const app = express()

app.use(express.json())

app.use("/organizations", organizationRoutes)

app.use(ErrorMiddleware.handle)

export { app }

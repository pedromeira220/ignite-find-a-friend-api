import { app } from "./app"
import { env } from "./env"

const PORT = env.PORT

app.listen(PORT, () => {
  console.log(`Http server running on port: ${PORT}`)
})

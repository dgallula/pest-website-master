import express from "express";
import { router as dogsController } from './controllers/dogs-controller.js'
import { router as catsController } from './controllers/cats-controller.js'
import { logger } from "./middleware/logger.js";
import { deleteForbidden } from "./middleware/delete-forbidden.js";
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors())
app.use(logger)

app.use('/', dogsController)
app.use('/', catsController)

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})

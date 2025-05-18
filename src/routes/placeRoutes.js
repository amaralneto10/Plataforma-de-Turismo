import express from 'express'
import { allPlace, deletePlace, listTypePlace, newPlace, updatePlace } from '../controllers/placeControllers.js'
import { validate } from '../middleware/validate.js'
import { placeSchemas } from '../schemas/placeSchemas.js'
import { authenticate } from '../middleware/authentication.js'


const router = express.Router()

router.post("/novo-lugar", authenticate, validate(placeSchemas), newPlace)

router.get("/listar-todos", authenticate, allPlace)

router.get("/listar-tipo",authenticate, listTypePlace)

router.put("/local/:id", authenticate, updatePlace)

router.delete("/deletar-local/:id", authenticate, deletePlace)

export default router
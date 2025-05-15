import express from 'express'
import { login, registerUser, registerAdmin } from '../controllers/userControllers.js'
import { validate } from '../middleware/validate.js'
import { createUserSchemas, loginSchema } from '../schemas/userSchemas.js'


const router = express.Router()

router.post("/register", validate(createUserSchemas), registerUser)

router.post("/register-adm", validate(createUserSchemas), registerAdmin)

router.post("/login", validate(loginSchema), login)



export default router
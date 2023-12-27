import express from 'express'
import { register } from '../controllers/authController.js'
import { login } from '../controllers/authController.js'

const router = express.Router()

// Registro de usuarios
router.post('/register', register)

// Login de usuarios
router.post('/login', login)


export default router

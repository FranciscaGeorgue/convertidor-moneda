import express from 'express'
import { login, register, user } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Registro de usuarios
router.post('/register', register)

// Login de usuarios
router.post('/login', login)

// Area privada
router.get('/user', authMiddleware, user)

export default router

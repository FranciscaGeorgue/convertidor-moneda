import express from 'express'
import { login, register, user, saveRecord, getRecords } from '../controllers/mainController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Registro de usuarios
router.post('/register', register)

// Login de usuarios
router.post('/login', login)

// Registro de consulta
router.post('/save-record', saveRecord)

// Obtener consultas por fecha
router.get('/get-records', getRecords)

// Area privada
router.get('/user', authMiddleware, user)

export default router

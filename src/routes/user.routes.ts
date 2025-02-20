import express from 'express'
const router = express.Router()
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/user.controllers'
import { authToken, authRole } from '../middlewares/auth'
import { Role } from '../enum/const'

// Ruta para crear un usuario
router.post('/createUser', createUser)

// Ruta para obtener todos los usuarios
router.get('/getUsers', authToken, authRole([Role.ADMIN]), getUsers)

// Ruta para obtener todos los usuarios
router.get('/getUserById', authToken, authRole([Role.ADMIN]), getUserById)

// Ruta para obtener todos los usuarios
router.put('/updateUser', authToken, authRole([Role.ADMIN]), updateUser)

// Ruta para obtener todos los usuarios
router.delete('/deleteUser', authToken, authRole([Role.ADMIN]), deleteUser)

export const userRoutes = router

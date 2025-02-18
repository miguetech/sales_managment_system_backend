import express from 'express'
const router = express.Router()
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/user.controllers'
import { authenticatedToken } from '../utils/authenticatedToken'

// Ruta para crear un usuario
router.post('/createUser', createUser)

// Ruta para obtener todos los usuarios
router.get(
  '/getUsers',
  (req, res, nex) => {
    authenticatedToken(req, res, nex)
  },
  getUsers,
)

// Ruta para obtener todos los usuarios
router.get('/getUserById', getUserById)

// Ruta para obtener todos los usuarios
router.put('/updateUser', updateUser)

// Ruta para obtener todos los usuarios
router.delete('/deleteUser', deleteUser)

export const userRoutes = router

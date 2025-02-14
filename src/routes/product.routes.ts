import express from 'express'
const router = express.Router()
import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from '../controllers/product.controllers'

// Ruta para crear un usuario
router.post('/createProduct', createProduct)

// Ruta para obtener todos los usuarios
router.get('/getProducts', getProducts)

// Ruta para obtener todos los usuarios
router.get('/getProductById', getProductById)

// Ruta para obtener todos los usuarios
router.put('/updateProduct', updateProduct)

// Ruta para obtener todos los usuarios
router.delete('/deleteProduct', deleteProduct)

export const productRoutes = router

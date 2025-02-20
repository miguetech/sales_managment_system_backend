import express from 'express'
const router = express.Router()
import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from '../controllers/product.controllers'
import { Role } from '../enum/const'
import { authToken, authRole } from '../middlewares/auth'

router.post('/createProduct', authToken, authRole([Role.ADMIN, Role.SALESPERSON]), createProduct)

router.get('/getProducts', authToken, authRole([Role.ADMIN, Role.SALESPERSON]), getProducts)

router.get('/getProductById', authToken, authRole([Role.ADMIN, Role.SALESPERSON]), getProductById)

router.put('/updateProduct', authToken, authRole([Role.ADMIN]), updateProduct)

router.delete('/deleteProduct', authToken, authRole([Role.ADMIN]), deleteProduct)

export const productRoutes = router

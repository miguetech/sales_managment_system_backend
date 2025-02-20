import express from 'express'
const router = express.Router()
import { createSale, getSales, getSaleById, deleteSale, updateSale } from '../controllers/sale.controllers'
import { authRole, authToken } from '../middlewares/auth'
import { Role } from '../enum/const'

router.post('/createSale', authToken, authRole([Role.ADMIN, Role.SALESPERSON]), createSale)

router.get('/getSales', authToken, authRole([Role.ADMIN, Role.SALESPERSON]), getSales)

router.get('/getSaleById', authToken, authRole([Role.ADMIN, Role.SALESPERSON]), getSaleById)

router.put('/updateSale', authToken, authRole([Role.ADMIN]), updateSale)

router.delete('/deleteSale', authToken, authRole([Role.ADMIN]), deleteSale)

export const saleRoutes = router

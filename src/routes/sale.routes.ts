import express from 'express'
const router = express.Router()
import { createSale, getSales, getSaleById, deleteSale, updateSale } from '../controllers/sale.controllers'

// Ruta para crear un usuario
router.post('/createSale', createSale)

// Ruta para obtener todos los usuarios
router.get('/getSales', getSales)

// Ruta para obtener todos los usuarios
router.get('/getSaleById', getSaleById)

// Ruta para obtener todos los usuarios
router.put('/updateSale', updateSale)

// Ruta para obtener todos los usuarios
router.delete('/deleteSale', deleteSale)

export const saleRoutes = router

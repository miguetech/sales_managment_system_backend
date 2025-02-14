import { Request, Response } from 'express'
import {
  createSaleServices,
  deleteSaleServices,
  getSaleByIdServices,
  getSalesServices,
  updateSaleServices,
} from '../services/sale.services'
import { SaleType } from '../types/sale.types'

// Crear un usuario
const createSale = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body as SaleType
    const newSale = createSaleServices(data)
    await newSale.save()
    res.status(201).json(newSale)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Obtener todos los usuarios
const getSales = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getSalesServices()

    res.status(200).json(users)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Obtener un usuario por ID
const getSaleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body
    const findSale = await getSaleByIdServices(id)
    res.status(201).json(findSale)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Actualizar un usuario
const updateSale = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body
    const data = req.body as SaleType
    const updatedSale = await updateSaleServices(id, data)
    res.status(200).json(updatedSale)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Eliminar un usuario
const deleteSale = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body

    const deletedSale = await deleteSaleServices(id)

    res.status(201).json(deletedSale)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

export { createSale, getSales, getSaleById, updateSale, deleteSale }

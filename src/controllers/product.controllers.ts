import { Request, Response } from 'express'
import {
  createProductServices,
  deleteProductServices,
  getProductByIdServices,
  getProductsServices,
  updateProductServices,
} from '../services/product.services'
import { ProductType } from '../types/product.types'

// Crear un usuario
const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body as ProductType
    const newProduct = createProductServices(data)
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Obtener todos los usuarios
const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getProductsServices()

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
const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body
    const findProduct = await getProductByIdServices(id)
    res.status(201).json(findProduct)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Actualizar un usuario
const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body
    const data = req.body as ProductType
    const updatedProduct = await updateProductServices(id, data)
    res.status(200).json(updatedProduct)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Eliminar un usuario
const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body

    const deletedProduct = await deleteProductServices(id)

    res.status(201).json(deletedProduct)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct }

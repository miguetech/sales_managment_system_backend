import { Request, Response } from 'express'
import {
  createUserServices,
  deleteUserServices,
  getUserByIdServices,
  getUsersServices,
  updateUserServices,
} from '../services/user.services'
import { UserType } from '../types/user.types'

// Crear un usuario
const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body as UserType
    const newUser = await createUserServices(data)
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Obtener todos los usuarios
const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsersServices()
    console.log('Esta es la obtención de todos los usuarios', users)
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
const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body
    const findUser = await getUserByIdServices(id)
    res.status(201).json(findUser)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Actualizar un usuario
const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, name, email } = req.body
    const updatedUser = await updateUserServices(id, { name, email })
    res.status(200).json(updatedUser)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

// Eliminar un usuario
const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body

    const deletedUser = await deleteUserServices(id)

    res.status(201).json(deletedUser)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(400).json({ message: 'An unknown error occurred' })
    }
  }
}

export { createUser, getUsers, getUserById, updateUser, deleteUser }

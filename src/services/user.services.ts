import { User } from '../models/user.models'
import type { UserType } from '../types/user.types'
const createUserServices = (data: UserType) => {
  const newUser = new User(data)
  return newUser
}

const getUsersServices = async () => {
  return await User.find()
}

const getUserByIdServices = async (id: string) => {
  const findUser = await User.find({ _id: id })
  return findUser
}
const updateUserServices = async (id: string, update: Pick<UserType, 'name' | 'email' | 'role'>) => {
  const findUser = await User.findByIdAndUpdate(id, update, { new: true })

  return findUser
}

const deleteUserServices = async (id: string) => {
  const findUser = await User.findOneAndDelete({ _id: id })
  return findUser
}

export { createUserServices, getUsersServices, getUserByIdServices, updateUserServices, deleteUserServices }

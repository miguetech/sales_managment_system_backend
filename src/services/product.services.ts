import { Product } from '../models/product.models'
import { ProductType } from '../types/product.types'
const createProductServices = (data: ProductType) => {
  const newProduct = new Product(data)
  return newProduct
}

const getProductsServices = async () => {
  return await Product.find()
}

const getProductByIdServices = async (id: string) => {
  const findProduct = await Product.find({ _id: id })
  return findProduct
}
const updateProductServices = async (id: string, update: ProductType) => {
  const findProduct = await Product.findByIdAndUpdate(id, update, { new: true })

  return findProduct
}

const deleteProductServices = async (id: string) => {
  const findProduct = await Product.findOneAndDelete({ _id: id })
  return findProduct
}

export {
  createProductServices,
  getProductsServices,
  getProductByIdServices,
  updateProductServices,
  deleteProductServices,
}

import { Sale } from '../models/sale.models'
import { SaleType } from '../types/sale.types'
const createSaleServices = (data: SaleType) => {
  const newSale = new Sale(data)
  return newSale
}

const getSalesServices = async () => {
  return await Sale.find()
}

const getSaleByIdServices = async (id: string) => {
  const findSale = await Sale.find({ _id: id })
  return findSale
}
const updateSaleServices = async (id: string, update: SaleType) => {
  const findSale = await Sale.findByIdAndUpdate(id, update, { new: true })

  return findSale
}

const deleteSaleServices = async (id: string) => {
  const findSale = await Sale.findOneAndDelete({ _id: id })
  return findSale
}

export { createSaleServices, getSalesServices, getSaleByIdServices, updateSaleServices, deleteSaleServices }

import mongoose from 'mongoose'

const saleSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  salesPersonID: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  date: {
    type: Date,
  },
})

export const Sale = mongoose.model('Sale', saleSchema)

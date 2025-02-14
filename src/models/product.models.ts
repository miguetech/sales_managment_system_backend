import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
})

export const Product = mongoose.model('Product', productSchema)

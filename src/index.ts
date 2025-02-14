import express from 'express'
import dotenv from 'dotenv'
import { userRoutes } from './routes/user.routes'
import mongoose from 'mongoose'
import { productRoutes } from './routes/product.routes'
import { saleRoutes } from './routes/sale.routes'
// Cargar variables de entorno
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Conectar a MongoDB
const mongoUri = process.env.MONGODB_URI || ''

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Conectado a MongoDB en la base de datos:', mongoose.connection.name)
  })
  .catch((err: unknown) => {
    console.error('Error conectando a MongoDB:', err)
  })

app.use(express.json())
app.use('/users', userRoutes)
app.use('/product', productRoutes)
app.use('/sale', saleRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

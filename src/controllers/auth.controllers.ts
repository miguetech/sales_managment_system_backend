import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { loginServices } from '../services/auth.services'

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  const user = await loginServices(email)

  if (!user) {
    res.status(401).json({ error: 'Credenciales inválidas' })
    return
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    res.status(401).json({ error: 'Credenciales inválidas' })
  }

  const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET || 'secret', {
    expiresIn: '1h',
  })

  res.json({ token })
}

export { login }

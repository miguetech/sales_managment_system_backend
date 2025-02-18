import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

export async function authenticatedToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401)
  } else {
    try {
      jwt.verify(token, process.env.TOKEN_SECRET as string)
      next()
    } catch (err) {
      console.error('Error verifying token:', err)
      return res.status(403).json({ error: 'Invalid token' })
    }
  }
}

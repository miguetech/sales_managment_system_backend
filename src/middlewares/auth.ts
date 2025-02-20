import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { TokenPayload, UserRoleType } from '../types/auth.types'

export async function authToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    res.sendStatus(401)
  } else {
    try {
      const payload: TokenPayload = jwt.verify(token, process.env.TOKEN_SECRET as string) as TokenPayload
      res.locals.user = payload
      next()
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(403).json({ error: err.message })
      } else {
        res.status(403).json({ error: 'Unknown error' })
      }
      next(err)
    }
  }
}

export function authRole(requiredRole: UserRoleType[]) {
  // Se espera que el middleware authenticatedToken ya haya asignado res.locals.user

  return (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.user) {
      res.sendStatus(401).json({ error: 'No se autentico el token' })
    }

    if (requiredRole.includes(res.locals.role)) {
      res.status(403).json({ error: 'No tienes permisos para acceder a este recurso' })
    }

    next()
  }
}

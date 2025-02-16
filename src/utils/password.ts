import bcrypt from 'bcryptjs'

const saltRounds = 10

// Función para hashear una contraseña de forma asíncrona
export const hashPassword = async (plainPassword: string) => {
  const hash = await bcrypt.hash(plainPassword, saltRounds)
  return hash
}

// Función para comparar una contraseña en texto plano con su hash
export const comparePassword = async (plainPassword: string, hashedPassword: string) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword)
  return isMatch
}

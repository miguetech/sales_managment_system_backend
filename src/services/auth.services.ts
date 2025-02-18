import { User } from '../models/user.models'

const loginServices = async (email: string) => {
  return await User.findOne({ email: email })
}

export { loginServices }

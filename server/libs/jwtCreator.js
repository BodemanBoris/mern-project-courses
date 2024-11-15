import jwt from 'jsonwebtoken'
import { TOKEN_PRIVATE_KEY } from '../config.js'

export const jwtCreator = (payload) => {
  const token = jwt.sign({ payload }, TOKEN_PRIVATE_KEY, {
    expiresIn: '1d'
  })

  return token
}

export const jwtEval = (payload) => {
  const token = jwt.verify(payload, TOKEN_PRIVATE_KEY)

  return token
}

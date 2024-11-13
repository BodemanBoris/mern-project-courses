import jwt from 'jsonwebtoken'
const PRIVATE_KEY = 'AlgunaClaveAleatoria1234'

export const jwtCreator = (payload) => {
  const token = jwt.sign({ payload }, PRIVATE_KEY, {
    expiresIn: '1d'
  })

  return token
}

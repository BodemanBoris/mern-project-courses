import { Router } from 'express'
import { logIn, logOut, signIn } from '../controller/authController.js'

export const autRoutes = Router()

autRoutes.post('/login', logIn)
autRoutes.post('/signin', signIn)

autRoutes.post('/logout', logOut)

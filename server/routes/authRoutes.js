import { Router } from 'express'
import { logIn, logOut, signIn, user } from '../controller/authController.js'

export const autRoutes = Router()

autRoutes.post('/login', logIn)
autRoutes.post('/signin', signIn)

autRoutes.post('/logout', logOut)

autRoutes.get('/user', user)

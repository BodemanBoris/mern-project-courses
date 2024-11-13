import express from 'express'
import morgan from 'morgan'
import { connectDb } from './db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
export const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors())
connectDb()

import { app } from './app.js'
import { PORT } from './config.js'
import { autRoutes } from './routes/authRoutes.js'

app.use('/', autRoutes)

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please use another port.`)
  } else {
    console.error('Server error:', error)
  }
})

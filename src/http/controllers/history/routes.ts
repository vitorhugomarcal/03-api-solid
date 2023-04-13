import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { historyByUser } from './historyByUser'
import { register } from './register'

export async function historyRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/history', register)
  app.get('/history', historyByUser)
}

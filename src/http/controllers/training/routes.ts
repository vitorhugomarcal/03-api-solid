import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { training } from './training'

export async function trainingRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/training/:userId', training)
}

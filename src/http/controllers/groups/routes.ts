import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { groups } from './groups'

export async function groupsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/groups', groups)
}

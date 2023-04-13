import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import { FastifyInstance } from 'fastify'
import { all } from './all'
import { group } from './group'
import { id } from './id'
import { register } from './register'

export async function exercisesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/exercises', all)
  app.post('/exercises', { onRequest: verifyUserRole('ADMIN') }, register)
  app.get('/exercises/bygroup/:group', group)
  app.get('/exercises/byid/:id', id)
}

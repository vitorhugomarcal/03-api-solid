import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { all } from './all'
import { training } from './training'
import { id } from './id'
import { register } from './register'
import { update } from './update'
import { remove } from './remove'
import { updatePosition } from './update-position'

export async function exercisesByUserRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/exercisesbyuser', all)
  app.get('/exercisesbyuser/byid/:id', id)
  app.get('/exercisesbyuser/bytraining/:training', training)
  app.put('/exercisesbyuser/:id', update)
  app.patch('/exercisesbyuser/:id', updatePosition)
  app.post('/exercisesbyuser', register)
  app.delete('/exercisesbyuser/:id', remove)
}

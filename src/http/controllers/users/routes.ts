import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { index } from './index'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { refresh } from './refresh'
import { register } from './register'
import { update } from './update'
import { uploadAvatar } from './upload-avatar'

import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import multer from 'fastify-multer'
import uploadConfig from '@/config/upload'
import { show } from './show'

export async function usersRoutes(app: FastifyInstance) {
  const upload = multer(uploadConfig.MULTER)

  app.post('/users', register)

  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/users', { onRequest: [verifyJWT, verifyUserRole('ADMIN')] }, index)
  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.put('/users', { onRequest: [verifyJWT] }, update)
  app.get('/users/:userId', { onRequest: [verifyJWT] }, show)

  app.patch(
    '/users/avatar',
    {
      onRequest: [verifyJWT],
      preHandler: upload.single('avatar'),
    },
    uploadAvatar,
  )
}

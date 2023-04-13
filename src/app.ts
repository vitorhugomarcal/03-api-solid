import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import fastifyMulter from 'fastify-multer'

import { ZodError } from 'zod'
import { env } from './env'

import { checkInsRoutes } from './http/controllers/check-ins/routes'
import { gymsRoutes } from './http/controllers/gyms/routes'
import { usersRoutes } from './http/controllers/users/routes'
import { exercisesRoutes } from './http/controllers/exercises/routes'
import { exercisesByUserRoutes } from './http/controllers/exercisesbyuser/routes'
import { historyRoutes } from './http/controllers/history/routes'
import { trainingRoutes } from './http/controllers/training/routes'
import { groupsRoutes } from './http/controllers/groups/routes'
import fastifyStatic from '@fastify/static'
import uploadConfig from './config/upload'
import path from 'path'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyMulter.contentParser)

const demoExercisePath = path.resolve(__dirname, '..', 'exercises', 'gif')
const thumbExercisesPath = path.resolve(__dirname, '..', 'exercises', 'thumb')

app.register(fastifyStatic, {
  root: uploadConfig.UPLOADS_FOLDER,
  prefix: '/avatar',
  decorateReply: false,
})

app.register(fastifyStatic, {
  root: demoExercisePath,
  prefix: '/exercises/demo',
  decorateReply: false,
})

app.register(fastifyStatic, {
  root: thumbExercisesPath,
  prefix: '/exercises/thumb',
  decorateReply: false,
})

app.register(fastifyCookie)

app.register(usersRoutes)
app.register(gymsRoutes)
app.register(checkInsRoutes)
app.register(exercisesRoutes)
app.register(exercisesByUserRoutes)
app.register(historyRoutes)
app.register(groupsRoutes)
app.register(trainingRoutes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: here we should log to an external tool like DataDog/NewRelic.Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

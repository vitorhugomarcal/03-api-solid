import { makeHistoryByUserUseCase } from '@/use-cases/history/factories/make-history-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const exercisesBodySchema = z.object({
    training: z.string(),
    exercise_id: z.string(),
  })

  const { training, exercise_id } = exercisesBodySchema.parse(request.body)

  const exercisesUseCase = makeHistoryByUserUseCase()

  await exercisesUseCase.execute({
    user_id: request.user.sub,
    exercise_id,
    training,
  })

  return reply.status(201).send()
}

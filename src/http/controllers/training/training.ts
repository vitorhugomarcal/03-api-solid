import { makeFetchTrainingUseCase } from '@/use-cases/training/factories/make-fetch-training-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function training(request: FastifyRequest, reply: FastifyReply) {
  const idExerciseParamsSchema = z.object({
    userId: z.string(),
  })

  const { userId } = idExerciseParamsSchema.parse(request.params)

  const exercisesUseCase = makeFetchTrainingUseCase()

  const training = await exercisesUseCase.execute({ userId })

  return reply.status(200).send(training)
}

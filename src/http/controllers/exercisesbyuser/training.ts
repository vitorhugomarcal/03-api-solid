import { makeFetchExercisesByTrainingUseCase } from '@/use-cases/exercisesbyuser/factories/make-fetch-exercises-by-training-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function training(request: FastifyRequest, reply: FastifyReply) {
  const trainingExerciseParamsSchema = z.object({
    training: z.string(),
  })

  const { training } = trainingExerciseParamsSchema.parse(request.params)

  const getExercises = makeFetchExercisesByTrainingUseCase()

  const { exercises } = await getExercises.execute({
    training,
  })

  return reply.status(200).send(exercises)
}

import { makeFetchExercisesByUserIdUseCase } from '@/use-cases/exercisesbyuser/factories/make-fetch-exercises-by-id-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function id(request: FastifyRequest, reply: FastifyReply) {
  const idExerciseParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = idExerciseParamsSchema.parse(request.params)

  const getExercises = makeFetchExercisesByUserIdUseCase()

  const { exercises } = await getExercises.execute({
    id,
  })

  return reply.status(200).send(exercises)
}

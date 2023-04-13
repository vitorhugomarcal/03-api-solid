import { makeFetchExercisesByGroupUseCase } from '@/use-cases/factories/make-fetch-exercises-by-group-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function group(request: FastifyRequest, reply: FastifyReply) {
  const groupExerciseParamsSchema = z.object({
    group: z.string(),
  })

  const { group } = groupExerciseParamsSchema.parse(request.params)

  const getExercises = makeFetchExercisesByGroupUseCase()

  const { exercises } = await getExercises.execute({
    group,
  })

  return reply.status(200).send(exercises)
}

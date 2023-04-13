import { makeUpdatePositionExercisesByUserUseCase } from '@/use-cases/exercisesbyuser/factories/make-update-position-exercise-by-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function updatePosition(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateExerciseByUserBodySchema = z.object({
    position: z.number().nullable(),
  })

  const idExerciseParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = idExerciseParamsSchema.parse(request.params)

  const { position } = updateExerciseByUserBodySchema.parse(request.body)

  const updateExerciseByUserUseCase = makeUpdatePositionExercisesByUserUseCase()

  await updateExerciseByUserUseCase.execute({
    id,
    position,
  })

  return reply.status(200).send()
}

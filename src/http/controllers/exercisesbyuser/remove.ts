import { makeDeleteExercisesByUserUseCase } from '@/use-cases/exercisesbyuser/factories/make-delete-exercise-by-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const idExerciseParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = idExerciseParamsSchema.parse(request.params)

  const deleteExerciseByUserUseCase = makeDeleteExercisesByUserUseCase()

  await deleteExerciseByUserUseCase.execute({
    id,
  })

  return reply.status(200).send()
}

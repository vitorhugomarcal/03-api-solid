import { makeUpdateExercisesByUserUseCase } from '@/use-cases/exercisesbyuser/factories/make-update-exercise-by-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateExerciseByUserBodySchema = z.object({
    training: z.string(),
    series: z.number(),
    repetitions: z.number().nullable().optional(),
    timer: z.number().nullable().optional(),
    stop: z.number().nullable().optional(),
    position: z.number().nullable().optional(),
  })

  const idExerciseParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = idExerciseParamsSchema.parse(request.params)

  const { training, series, repetitions, timer, stop, position } =
    updateExerciseByUserBodySchema.parse(request.body)

  const updateExerciseByUserUseCase = makeUpdateExercisesByUserUseCase()

  await updateExerciseByUserUseCase.execute({
    id,
    training,
    series,
    repetitions,
    timer,
    stop,
    position,
  })

  return reply.status(200).send()
}

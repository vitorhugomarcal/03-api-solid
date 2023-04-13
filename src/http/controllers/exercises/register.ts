import { makeExercisesUseCase } from '@/use-cases/factories/make-exercises-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const exercisesBodySchema = z.object({
    name: z.string(),
    group: z.string(),
    demo: z.string(),
    thumb: z.string(),
  })

  const { name, group, demo, thumb } = exercisesBodySchema.parse(request.body)

  const exercisesUseCase = makeExercisesUseCase()

  await exercisesUseCase.execute({
    name,
    group,
    demo,
    thumb,
  })

  return reply.status(201).send()
}

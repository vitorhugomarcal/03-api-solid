import { makeExercisesByUserUseCase } from '@/use-cases/exercisesbyuser/factories/make-exercises-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const exercisesByUserBodySchema = z.object({
    user_id: z.string(),
    exercise_id: z.string(),
    training: z.string(),
    series: z.number(),
    repetitions: z.number().optional(),
    timer: z.number().optional(),
    stop: z.number().optional(),
    position: z.number().optional(),
  })

  const {
    user_id,
    exercise_id,
    training,
    series,
    repetitions,
    timer,
    stop,
    position,
  } = exercisesByUserBodySchema.parse(request.body)

  if (!training) {
    throw new Error('Escolha um treino.')
  }

  if (timer && !stop) {
    throw new Error('Escolha um intervalo entre séries.')
  }

  if (!series && series < 1) {
    throw new Error('Insira a quantidade de séries.')
  }

  if (!timer && !repetitions) {
    throw new Error('Insira as repetições ou tempo do exercício.')
  }

  const exercisesUseCase = makeExercisesByUserUseCase()

  await exercisesUseCase.execute({
    user_id,
    exercise_id,
    training,
    series,
    repetitions,
    timer,
    stop,
    position,
  })

  return reply.status(201).send()
}

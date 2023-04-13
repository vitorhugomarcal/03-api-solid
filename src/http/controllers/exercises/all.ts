import { makeFetchExercisesUseCase } from '@/use-cases/factories/make-fetch-exercises-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function all(request: FastifyRequest, reply: FastifyReply) {
  const getExercises = makeFetchExercisesUseCase()

  const { exercises } = await getExercises.execute()

  return reply.status(200).send(exercises)
}

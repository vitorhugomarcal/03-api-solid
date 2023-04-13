import { makeFetchExercisesByUserUseCase } from '@/use-cases/exercisesbyuser/factories/make-fetch-exercises-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function all(request: FastifyRequest, reply: FastifyReply) {
  const getExercises = makeFetchExercisesByUserUseCase()

  const { exercises } = await getExercises.execute()

  return reply.status(200).send(exercises)
}

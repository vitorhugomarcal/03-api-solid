import { makeFetchGroupsUseCase } from '@/use-cases/group/factories/make-fetch-groups-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function groups(request: FastifyRequest, reply: FastifyReply) {
  const exercisesUseCase = makeFetchGroupsUseCase()

  const groups = await exercisesUseCase.execute()

  return reply.status(200).send(groups)
}

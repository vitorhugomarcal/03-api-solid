import { makeFetchHistoryByUserUseCase } from '@/use-cases/history/factories/make-fetch-history-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function historyByUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getHistory = makeFetchHistoryByUserUseCase()

  const userId = request.user.sub

  const { history } = await getHistory.execute({ userId })

  return reply.status(200).send(history)
}

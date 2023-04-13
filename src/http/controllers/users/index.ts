import { makeGetUsersUseCase } from '@/use-cases/factories/make-users-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function index(request: FastifyRequest, reply: FastifyReply) {
  const getUsers = makeGetUsersUseCase()

  const { users } = await getUsers.execute()

  const filteredUsers = users.map((user) => ({
    ...user,
    password_hash: undefined,
  }))

  const onlyMembers = filteredUsers.filter((user) => user.role === 'MEMBER')

  return reply.status(200).send(onlyMembers)
}

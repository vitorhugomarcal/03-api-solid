import { makeUpdateUserUseCase } from '@/use-cases/factories/make-update-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateUsersParamsSchema = z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    password: z.string().min(6).optional(),
    old_password: z.string().optional(),
  })

  const { name, phone, password, old_password } = updateUsersParamsSchema.parse(
    request.body,
  )

  const updateUserUseCase = makeUpdateUserUseCase()

  await updateUserUseCase.execute({
    userId: request.user.sub,
    name,
    phone,
    password,
    old_password,
  })

  return reply.status(204).send()
}

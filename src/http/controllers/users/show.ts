import { makeGetUserProfileIdUseCase } from '@/use-cases/factories/make-user-profile-id-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function show(request: FastifyRequest, reply: FastifyReply) {
  const idExerciseParamsSchema = z.object({
    userId: z.string(),
  })

  const { userId } = idExerciseParamsSchema.parse(request.params)

  const getUserProfile = makeGetUserProfileIdUseCase()

  const { user } = await getUserProfile.execute({ userId })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  })
}

import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileIdUseCase } from '../get-user-profile-id'

export function makeGetUserProfileIdUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new GetUserProfileIdUseCase(usersRepository)

  return useCase
}

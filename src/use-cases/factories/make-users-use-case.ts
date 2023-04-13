import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUsersUseCase } from '../get-users'

export function makeGetUsersUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new GetUsersUseCase(usersRepository)

  return useCase
}

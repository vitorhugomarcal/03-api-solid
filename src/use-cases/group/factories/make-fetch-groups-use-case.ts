import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { FetchGroupsUseCase } from '../fetch-groups'

export function makeFetchGroupsUseCase() {
  const historyRepository = new PrismaExercisesRepository()
  const useCase = new FetchGroupsUseCase(historyRepository)

  return useCase
}

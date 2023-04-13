import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { FetchTrainingUseCase } from '../fetch-training'

export function makeFetchTrainingUseCase() {
  const historyRepository = new PrismaExercisesByUserRepository()
  const useCase = new FetchTrainingUseCase(historyRepository)

  return useCase
}

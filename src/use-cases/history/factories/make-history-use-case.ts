import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { PrismaHistoryRepository } from '@/repositories/prisma/prisma-history-repository'
import { HistoryByUserUseCase } from '../history'

export function makeHistoryByUserUseCase() {
  const exerciseRepository = new PrismaExercisesRepository()
  const historyRepository = new PrismaHistoryRepository()

  const useCase = new HistoryByUserUseCase(
    exerciseRepository,
    historyRepository,
  )

  return useCase
}

import { PrismaHistoryRepository } from '@/repositories/prisma/prisma-history-repository'
import { FetchHistoryUseCase } from '../fetch-exercises'

export function makeFetchHistoryByUserUseCase() {
  const historyRepository = new PrismaHistoryRepository()
  const useCase = new FetchHistoryUseCase(historyRepository)

  return useCase
}

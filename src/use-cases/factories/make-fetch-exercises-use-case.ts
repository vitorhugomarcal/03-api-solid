import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { FetchExercisesUseCase } from '../fetch-exercises'

export function makeFetchExercisesUseCase() {
  const exercisesRepository = new PrismaExercisesRepository()
  const useCase = new FetchExercisesUseCase(exercisesRepository)

  return useCase
}

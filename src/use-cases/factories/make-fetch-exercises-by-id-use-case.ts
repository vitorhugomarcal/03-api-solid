import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { FetchExercisesByIdUseCase } from '../fetch-exercises-by-id'

export function makeFetchExercisesByIdUseCase() {
  const exercisesRepository = new PrismaExercisesRepository()
  const useCase = new FetchExercisesByIdUseCase(exercisesRepository)

  return useCase
}

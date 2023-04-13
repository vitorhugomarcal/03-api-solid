import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { FetchExercisesByIdUseCase } from '../fetch-exercises-by-id'

export function makeFetchExercisesByUserIdUseCase() {
  const exercisesRepository = new PrismaExercisesByUserRepository()
  const useCase = new FetchExercisesByIdUseCase(exercisesRepository)

  return useCase
}

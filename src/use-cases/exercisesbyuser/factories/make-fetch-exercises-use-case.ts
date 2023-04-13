import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { FetchExercisesByUserUseCase } from '../fetch-exercises'

export function makeFetchExercisesByUserUseCase() {
  const exercisesRepository = new PrismaExercisesByUserRepository()
  const useCase = new FetchExercisesByUserUseCase(exercisesRepository)

  return useCase
}

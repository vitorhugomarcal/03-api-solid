import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { UpdateExerciseByUserUseCase } from '../update-exercise-by-user'

export function makeUpdateExercisesByUserUseCase() {
  const updateExerciseRepository = new PrismaExercisesByUserRepository()
  const useCase = new UpdateExerciseByUserUseCase(updateExerciseRepository)

  return useCase
}

import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { UpdatePositionExerciseByUserUseCase } from '../update-position-exercise-by-user'

export function makeUpdatePositionExercisesByUserUseCase() {
  const updateExerciseRepository = new PrismaExercisesByUserRepository()
  const useCase = new UpdatePositionExerciseByUserUseCase(
    updateExerciseRepository,
  )

  return useCase
}

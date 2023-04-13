import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { DeleteExercisesByUserUseCase } from '../delete-exercise'

export function makeDeleteExercisesByUserUseCase() {
  const exerciseByUserRepository = new PrismaExercisesByUserRepository()
  const useCase = new DeleteExercisesByUserUseCase(exerciseByUserRepository)

  return useCase
}

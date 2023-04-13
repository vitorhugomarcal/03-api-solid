import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { FetchExercisesByTrainingUseCase } from '../fetch-exercises-by-training'

export function makeFetchExercisesByTrainingUseCase() {
  const exercisesRepository = new PrismaExercisesByUserRepository()
  const useCase = new FetchExercisesByTrainingUseCase(exercisesRepository)

  return useCase
}

import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { FetchExercisesByGroupUseCase } from '../fetch-exercises-by-group'

export function makeFetchExercisesByGroupUseCase() {
  const exercisesRepository = new PrismaExercisesRepository()
  const useCase = new FetchExercisesByGroupUseCase(exercisesRepository)

  return useCase
}

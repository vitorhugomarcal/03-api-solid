import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { ExercisesUseCase } from '../exercises'

export function makeExercisesUseCase() {
  const exercisesRepository = new PrismaExercisesRepository()
  const exercisesUseCase = new ExercisesUseCase(exercisesRepository)

  return exercisesUseCase
}

import { PrismaExercisesByUserRepository } from '@/repositories/prisma/prisma-exercises-by-user-repository'
import { PrismaExercisesRepository } from '@/repositories/prisma/prisma-exercises-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ExercisesByUserUseCase } from '../exercises'

export function makeExercisesByUserUseCase() {
  const exercisesByUserRepository = new PrismaExercisesByUserRepository()
  const exerciseRepository = new PrismaExercisesRepository()
  const usersRepository = new PrismaUsersRepository()

  const useCase = new ExercisesByUserUseCase(
    usersRepository,
    exerciseRepository,
    exercisesByUserRepository,
  )

  return useCase
}

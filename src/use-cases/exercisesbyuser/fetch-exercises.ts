import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ExercisesByUser } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface FetchExercisesUseCaseResponse {
  exercises: ExercisesByUser[]
}

export class FetchExercisesByUserUseCase {
  constructor(private exercisesByUserRepository: ExercisesByUserRepository) {}

  async execute(): Promise<FetchExercisesUseCaseResponse> {
    const exercises = await this.exercisesByUserRepository.findAll()

    if (!exercises || exercises.length === 0) {
      throw new ResourceNotFoundError()
    }

    return {
      exercises,
    }
  }
}

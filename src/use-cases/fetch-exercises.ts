import { ExercisesRepository } from '@/repositories/exercises-repository'
import { Exercise } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-fount-error'

interface FetchExercisesUseCaseResponse {
  exercises: Exercise[]
}

export class FetchExercisesUseCase {
  constructor(private exercisesRepository: ExercisesRepository) {}

  async execute(): Promise<FetchExercisesUseCaseResponse> {
    const exercises = await this.exercisesRepository.findAll()

    if (!exercises || exercises.length === 0) {
      throw new ResourceNotFoundError()
    }

    return {
      exercises,
    }
  }
}

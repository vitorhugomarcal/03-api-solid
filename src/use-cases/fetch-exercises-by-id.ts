import { ExercisesRepository } from '@/repositories/exercises-repository'
import { Exercise } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-fount-error'

interface FetchExercisesByIdUseCaseRequest {
  id: string
}

interface FetchExercisesByIdUseCaseResponse {
  exercises: Exercise
}

export class FetchExercisesByIdUseCase {
  constructor(private exercisesRepository: ExercisesRepository) {}

  async execute({
    id,
  }: FetchExercisesByIdUseCaseRequest): Promise<FetchExercisesByIdUseCaseResponse> {
    const exercises = await this.exercisesRepository.findById(id)

    if (!exercises?.id) {
      throw new ResourceNotFoundError()
    }

    return {
      exercises,
    }
  }
}

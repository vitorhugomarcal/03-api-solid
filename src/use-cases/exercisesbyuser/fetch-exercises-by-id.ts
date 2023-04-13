import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ExercisesByUser } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface FetchExercisesByUserIdUseCaseRequest {
  id: string
}

interface FetchExercisesByUserIdUseCaseResponse {
  exercises: ExercisesByUser
}

export class FetchExercisesByIdUseCase {
  constructor(private exercisesRepository: ExercisesByUserRepository) {}

  async execute({
    id,
  }: FetchExercisesByUserIdUseCaseRequest): Promise<FetchExercisesByUserIdUseCaseResponse> {
    const exercises = await this.exercisesRepository.findById(id)

    if (!exercises) {
      throw new ResourceNotFoundError()
    }

    return {
      exercises,
    }
  }
}

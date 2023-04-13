import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ExercisesByUser } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface FetchExercisesByTrainingUseCaseRequest {
  training: string
}

interface FetchExercisesByTrainingUseCaseResponse {
  exercises: ExercisesByUser[]
}

export class FetchExercisesByTrainingUseCase {
  constructor(private exercisesByUserRepository: ExercisesByUserRepository) {}

  async execute({
    training,
  }: FetchExercisesByTrainingUseCaseRequest): Promise<FetchExercisesByTrainingUseCaseResponse> {
    const exercises = await this.exercisesByUserRepository.findByTraining(
      training,
    )

    if (!exercises) {
      throw new ResourceNotFoundError()
    }

    return {
      exercises,
    }
  }
}

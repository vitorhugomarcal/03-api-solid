import { ExercisesRepository } from '@/repositories/exercises-repository'
import { Exercise } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-fount-error'

interface FetchExercisesByGroupUseCaseRequest {
  group: string
}

interface FetchExercisesByGroupUseCaseResponse {
  exercises: Exercise[]
}

export class FetchExercisesByGroupUseCase {
  constructor(private exercisesRepository: ExercisesRepository) {}

  async execute({
    group,
  }: FetchExercisesByGroupUseCaseRequest): Promise<FetchExercisesByGroupUseCaseResponse> {
    const exercises = await this.exercisesRepository.findByGroup(group)

    if (!exercises || exercises.length === 0) {
      throw new ResourceNotFoundError()
    }

    return {
      exercises,
    }
  }
}

import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface DeleteExercisesByUserUseCaseRequest {
  id: string
}

export class DeleteExercisesByUserUseCase {
  constructor(private exercisesByUserRepository: ExercisesByUserRepository) {}

  async execute({ id }: DeleteExercisesByUserUseCaseRequest) {
    const exercise = await this.exercisesByUserRepository.findById(id)

    if (!exercise) {
      throw new ResourceNotFoundError()
    }

    await this.exercisesByUserRepository.delete(id)
  }
}

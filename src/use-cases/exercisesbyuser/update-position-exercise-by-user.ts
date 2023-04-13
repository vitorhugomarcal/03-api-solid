import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ExercisesByUser } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface UpdatePositionExerciseByUserUseCaseRequest {
  id: string
  position: number | null
}

interface UpdatePositionExerciseByUserUseCaseResponse {
  exercise: ExercisesByUser
}

export class UpdatePositionExerciseByUserUseCase {
  constructor(private exerciseByUserRepository: ExercisesByUserRepository) {}

  async execute({
    id,
    position,
  }: UpdatePositionExerciseByUserUseCaseRequest): Promise<UpdatePositionExerciseByUserUseCaseResponse> {
    const exercise = await this.exerciseByUserRepository.findById(id)

    if (!exercise) {
      throw new ResourceNotFoundError()
    }

    await this.exerciseByUserRepository.update(id, {
      position,
    })

    return { exercise }
  }
}

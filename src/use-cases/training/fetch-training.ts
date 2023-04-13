import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'

interface FetchTrainingUseCaseRequest {
  userId: string
}

export class FetchTrainingUseCase {
  constructor(private exercisesRepository: ExercisesByUserRepository) {}

  async execute({ userId }: FetchTrainingUseCaseRequest) {
    const training = await this.exercisesRepository.trainingBy(userId)

    return training
  }
}

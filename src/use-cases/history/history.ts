import { ExercisesRepository } from '@/repositories/exercises-repository'
import { HistoryRepository } from '@/repositories/history-repository'
import { History } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface HistoryUserUseCaseRequest {
  user_id: string
  exercise_id: string
  training: string
}

interface HistoryUserUseCaseResponse {
  history: History
}

export class HistoryByUserUseCase {
  constructor(
    private exercisesRepository: ExercisesRepository,
    private historyUserRepository: HistoryRepository,
  ) {}

  async execute({
    user_id,
    exercise_id,
    training,
  }: HistoryUserUseCaseRequest): Promise<HistoryUserUseCaseResponse> {
    const exercise = await this.exercisesRepository.findById(exercise_id)

    if (!exercise) {
      throw new ResourceNotFoundError()
    }

    const history = await this.historyUserRepository.create({
      user_id,
      exercise_id,
      training,
    })

    return { history }
  }
}

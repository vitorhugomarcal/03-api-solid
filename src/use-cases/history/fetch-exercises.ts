import { HistoryRepository } from '@/repositories/history-repository'
import { History } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface FetchHistoryUseCaseRequest {
  userId: string
}

interface FetchHistoryUseCaseResponse {
  history: History[]
}

export class FetchHistoryUseCase {
  constructor(private historyByUserRepository: HistoryRepository) {}

  async execute({
    userId,
  }: FetchHistoryUseCaseRequest): Promise<FetchHistoryUseCaseResponse> {
    const history = await this.historyByUserRepository.findByUser(userId)

    if (!history) {
      throw new ResourceNotFoundError()
    }

    return {
      history,
    }
  }
}

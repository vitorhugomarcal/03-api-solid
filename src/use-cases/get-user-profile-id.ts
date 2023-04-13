import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-fount-error'

interface GetUserProfileIdUseCaseRequest {
  userId: string
}

interface GetUserProfileIdUseCaseResponse {
  user: User
}

export class GetUserProfileIdUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileIdUseCaseRequest): Promise<GetUserProfileIdUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user,
    }
  }
}

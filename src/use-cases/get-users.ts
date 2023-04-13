import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-fount-error'

interface GetUsersUseCaseResponse {
  users: User[]
}

export class GetUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetUsersUseCaseResponse> {
    const users = await this.usersRepository.findAll()

    if (!users || users.length === 0) {
      throw new ResourceNotFoundError()
    }

    return {
      users,
    }
  }
}

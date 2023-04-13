import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { compare, hash } from 'bcryptjs'
import { ResourceNotFoundError } from './errors/resource-not-fount-error'

interface UpdateUserUseCaseRequest {
  userId: string
  name?: string | null
  phone?: string | null
  password?: string | null
  old_password?: string | null
}

interface UpdateUserUseCaseResponse {
  user: User
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    name,
    phone,
    password,
    old_password,
  }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    user.name = name ?? user.name

    user.phone = phone ?? user.phone

    if (password && !old_password) {
      throw new Error(
        'Você precisa informar a senha antiga para definir a nova senha.',
      )
    }

    if (!password && old_password) {
      throw new Error('Informe a nova senha.')
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password_hash)

      if (!checkOldPassword) {
        throw new Error('A senha antiga não confere.')
      }

      user.password_hash = await hash(password, 8)
    }

    await this.usersRepository.save(user)

    return {
      user,
    }
  }
}

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { expect, describe, it, beforeEach } from 'vitest'
import { GetUsersUseCase } from './get-users'

let usersRepository: InMemoryUsersRepository
let sut: GetUsersUseCase

describe('Get Users Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUsersUseCase(usersRepository)
  })

  it('should be able to get all users', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: 11946202703,
      password_hash: await hash('password', 6),
    })

    await usersRepository.create({
      name: 'John Doe 2',
      email: 'john.doe2@gmail.com',
      phone: 11946202703,
      password_hash: await hash('password', 6),
    })

    const { users } = await sut.execute()

    expect(users).toHaveLength(2)
  })
})

import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ExercisesRepository } from '@/repositories/exercises-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { ExercisesByUser } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface ExercisesByUserUseCaseRequest {
  user_id: string
  exercise_id: string
  training: string
  series: number
  repetitions?: number
  timer?: number
  stop?: number
  position?: number
}

interface ExercisesByUserUseCaseResponse {
  execisesByUser: ExercisesByUser
}

export class ExercisesByUserUseCase {
  constructor(
    private userRepository: UsersRepository,
    private exercisesRepository: ExercisesRepository,
    private exercisesByUserRepository: ExercisesByUserRepository,
  ) {}

  async execute({
    user_id,
    exercise_id,
    training,
    series,
    repetitions,
    timer,
    stop,
    position,
  }: ExercisesByUserUseCaseRequest): Promise<ExercisesByUserUseCaseResponse> {
    const user = await this.userRepository.findById(user_id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    const exercise = await this.exercisesRepository.findById(exercise_id)

    if (!exercise) {
      throw new ResourceNotFoundError()
    }

    const execisesByUser = await this.exercisesByUserRepository.create({
      training,
      series,
      repetitions,
      timer,
      stop,
      position,
      exercise_id: exercise.id,
      user_id: user.id,
    })

    return { execisesByUser }
  }
}

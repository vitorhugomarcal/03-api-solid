import { ExercisesByUserRepository } from '@/repositories/exercises-by-user-repository'
import { ExercisesByUser } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-fount-error'

interface UpdateExerciseByUserUseCaseRequest {
  id: string
  training: string
  series: number
  repetitions?: number | null
  timer?: number | null
  stop?: number | null
  position?: number | null
}

interface UpdateExerciseByUserUseCaseResponse {
  exercise: ExercisesByUser
}

export class UpdateExerciseByUserUseCase {
  constructor(private exerciseByUserRepository: ExercisesByUserRepository) {}

  async execute({
    id,
    training,
    series,
    repetitions,
    timer,
    stop,
    position,
  }: UpdateExerciseByUserUseCaseRequest): Promise<UpdateExerciseByUserUseCaseResponse> {
    const exercise = await this.exerciseByUserRepository.findById(id)

    if (!exercise) {
      throw new ResourceNotFoundError()
    }

    if (!training) {
      throw new Error('Escolha um treino.')
    }

    if (timer && !stop) {
      throw new Error('Escolha um intervalo entre as séries.')
    }

    if (stop && !timer) {
      throw new Error('Escolha a duração do exercício.')
    }

    if (series < 1) {
      throw new Error('Insira a quantidade de séries.')
    }

    if (!timer && !repetitions) {
      throw new Error('Insira as repetições ou a duração do exercício.')
    }

    await this.exerciseByUserRepository.update(id, {
      training,
      series,
      repetitions,
      timer,
      stop,
      position,
    })

    return { exercise }
  }
}

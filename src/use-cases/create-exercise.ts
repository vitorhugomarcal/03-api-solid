import { ExercisesRepository } from '@/repositories/exercises-repository'
import { Exercise } from '@prisma/client'

interface CreateExerciseUseCaseRequest {
  name: string
  group: string
  demo: string
  thumb: string
}

interface CreateExerciseUseCaseResponse {
  exercise: Exercise
}

export class CreateExerciseUseCase {
  constructor(private gymsRepository: ExercisesRepository) {}

  async execute({
    name,
    group,
    demo,
    thumb,
  }: CreateExerciseUseCaseRequest): Promise<CreateExerciseUseCaseResponse> {
    const exercise = await this.gymsRepository.create({
      name,
      group,
      demo,
      thumb,
    })

    return { exercise }
  }
}

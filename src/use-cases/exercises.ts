import { ExercisesRepository } from '@/repositories/exercises-repository'
import { Exercise } from '@prisma/client'

interface ExercisesUseCaseRequest {
  name: string
  group: string
  demo: string
  thumb: string
}

interface ExercisesUseCaseResponse {
  exercise: Exercise
}

export class ExercisesUseCase {
  constructor(private exercisesRepository: ExercisesRepository) {}

  async execute({
    name,
    group,
    demo,
    thumb,
  }: ExercisesUseCaseRequest): Promise<ExercisesUseCaseResponse> {
    const exercise = await this.exercisesRepository.create({
      name,
      group,
      demo,
      thumb,
    })

    return { exercise }
  }
}

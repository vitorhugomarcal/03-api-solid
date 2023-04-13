import { ExercisesRepository } from '@/repositories/exercises-repository'

export class FetchGroupsUseCase {
  constructor(private exercisesRepository: ExercisesRepository) {}

  async execute() {
    const groups = await this.exercisesRepository.groupBy()

    return groups
  }
}

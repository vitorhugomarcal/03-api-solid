import { Exercise, Prisma } from '@prisma/client'

export interface ExercisesRepository {
  findById(id: string): Promise<Exercise | null>
  findByGroup(group: string): Promise<Exercise[]>
  groupBy(): Promise<string[]>
  findAll(): Promise<Exercise[]>
  create(data: Prisma.ExerciseUncheckedCreateInput): Promise<Exercise>
}

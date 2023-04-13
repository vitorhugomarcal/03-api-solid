import { ExercisesByUser, Prisma } from '@prisma/client'

export interface ExercisesByUserRepository {
  findById(id: string): Promise<ExercisesByUser | null>
  findByTraining(training: string): Promise<ExercisesByUser[]>
  trainingBy(userId: string): Promise<string[]>
  findAll(): Promise<ExercisesByUser[]>
  delete(id: string): Promise<void>
  update(
    id: string,
    data: Prisma.ExercisesByUserUncheckedUpdateInput,
  ): Promise<ExercisesByUser>
  updatePosition(
    id: string,
    data: Prisma.ExercisesByUserUncheckedUpdateInput,
  ): Promise<ExercisesByUser>
  create(
    data: Prisma.ExercisesByUserUncheckedCreateInput,
  ): Promise<ExercisesByUser>
}

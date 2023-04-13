import { prisma } from '@/lib/prisma'
import { ExercisesByUser, Prisma } from '@prisma/client'
import { ExercisesByUserRepository } from '../exercises-by-user-repository'

export class PrismaExercisesByUserRepository
  implements ExercisesByUserRepository
{
  async trainingBy(userId: string) {
    const exercises = await prisma.exercisesByUser.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        training: 'asc',
      },
    })

    const training = Array.from(new Set(exercises.map((item) => item.training)))

    return training
  }

  async create(data: Prisma.ExercisesByUserUncheckedCreateInput) {
    const exercise = await prisma.exercisesByUser.create({
      data,
    })

    return exercise
  }

  async updatePosition(
    id: string,
    data: Prisma.ExercisesByUserUncheckedCreateInput,
  ): Promise<ExercisesByUser> {
    const exercise = await prisma.exercisesByUser.findUnique({
      where: {
        id,
      },
    })

    if (!exercise) {
      throw new Error('Exercise not found.')
    }

    await prisma.exercisesByUser.update({
      where: {
        id: exercise.id,
      },
      data,
    })

    return exercise
  }

  async update(
    id: string,
    data: Prisma.ExercisesByUserUncheckedCreateInput,
  ): Promise<ExercisesByUser> {
    const exercise = await prisma.exercisesByUser.findUnique({
      where: {
        id,
      },
    })

    if (!exercise) {
      throw new Error('Exercise not found.')
    }

    await prisma.exercisesByUser.update({
      where: {
        id: exercise.id,
      },
      data,
    })

    return exercise
  }

  async findAll() {
    const exerciseByUser = await prisma.exercisesByUser.findMany({
      include: {
        exercise: {
          select: {
            name: true,
            group: true,
          },
        },
      },
    })
    const result = exerciseByUser.map((item) => ({
      ...item,
      ...item.exercise,
    }))

    result.forEach((item) => delete item.exercise)

    return result
  }

  async findByTraining(training: string) {
    const exerciseByUser = await prisma.exercisesByUser.findMany({
      where: {
        training,
      },
      orderBy: {
        position: 'asc',
      },
      include: {
        exercise: {
          select: {
            name: true,
            group: true,
            thumb: true,
            demo: true,
          },
        },
      },
    })

    const result = exerciseByUser.map((item) => ({
      ...item,
      ...item.exercise,
    }))

    result.forEach((item) => delete item.exercise)

    return result
  }

  async findById(id: string) {
    const exerciseByUser = await prisma.exercisesByUser.findUnique({
      where: {
        id,
      },
      include: {
        exercise: {
          select: {
            name: true,
            group: true,
            demo: true,
          },
        },
      },
    })

    const result = {
      ...exerciseByUser,
      ...exerciseByUser?.exercise,
    }

    delete result.exercise

    return result
  }

  async delete(id: string) {
    await prisma.exercisesByUser.delete({ where: { id } })
  }
}

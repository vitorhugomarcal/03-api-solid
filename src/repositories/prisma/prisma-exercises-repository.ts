import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ExercisesRepository } from '../exercises-repository'

export class PrismaExercisesRepository implements ExercisesRepository {
  async groupBy() {
    const exercises = await prisma.exercise.findMany()

    const groups = Array.from(new Set(exercises.map((item) => item.group)))

    return groups
  }

  async findAll() {
    const exercises = await prisma.exercise.findMany()
    return exercises
  }

  async findByGroup(group: string) {
    const exercise = await prisma.exercise.findMany({
      where: {
        group,
      },
    })
    return exercise
  }

  async findById(id: string) {
    const exercise = await prisma.exercise.findUnique({
      where: {
        id,
      },
      include: {
        exercisesByUser: {
          select: {
            repetitions: true,
            series: true,
            stop: true,
            timer: true,
            training: true,
          },
        },
      },
    })

    const result = {
      ...exercise,
      ...exercise?.exercisesByUser,
    }

    delete result.exercisesByUser

    return result
  }

  async create(data: Prisma.ExerciseUncheckedCreateInput) {
    const exercise = await prisma.exercise.create({
      data,
    })

    return exercise
  }
}

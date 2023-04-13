import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'
import { HistoryRepository } from '../history-repository'

export class PrismaHistoryRepository implements HistoryRepository {
  async findByUser(userId: string) {
    const history = await prisma.history.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        exercise: {
          select: {
            name: true,
            group: true,
          },
        },
      },
    })

    const days: String[] = []

    for (const exercise of history) {
      const day = dayjs(exercise.created_at).format('DD.MM.YYYY')
      if (!days.includes(day)) {
        days.push(day)
      }
    }

    const exercisesByDay = days.map((day) => {
      const exercises = history
        .filter(
          (exercise) => dayjs(exercise.created_at).format('DD.MM.YYYY') === day,
        )
        .map((item) => {
          return {
            ...item,
            ...item.exercise,
            hour: dayjs(item.created_at).format('HH:mm'),
          }
        })

      exercises.forEach((item) => delete item.exercise)

      return { title: day, data: exercises }
    })

    return exercisesByDay
  }

  async create(data: Prisma.HistoryUncheckedCreateInput) {
    const history = await prisma.history.create({
      data,
    })

    return history
  }
}

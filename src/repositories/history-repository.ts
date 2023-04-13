import { History, Prisma } from '@prisma/client'

export interface HistoryRepository {
  findByUser(userId: string): Promise<History[]>
  create(data: Prisma.HistoryUncheckedCreateInput): Promise<History>
}

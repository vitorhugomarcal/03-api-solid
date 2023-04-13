import { MulterFile } from '@/@types/multer-file'
import { prisma } from '@/lib/prisma'
import { DiskStorage } from '@/providers/DiskStorage'
import { FastifyRequest, FastifyReply } from 'fastify'

interface MulterRequest extends FastifyRequest {
  file: MulterFile
}

export async function uploadAvatar(
  request: MulterRequest,
  reply: FastifyReply,
) {
  const diskStorage = new DiskStorage()

  const avatarFilename = request.file.filename

  const user = await prisma.user.findFirst({
    where: {
      id: request.user.sub,
    },
  })

  if (!user) {
    throw new Error('Somente usuários autenticados podem mudar o avatar')
  }

  if (user.avatar) {
    await diskStorage.deleteFile(user.avatar)
  }

  const filename = await diskStorage.saveFile(avatarFilename)

  await prisma.user.update({
    where: {
      id: request.user.sub,
    },
    data: {
      avatar: filename,
    },
  })

  return reply.status(204).send()
}

import crypto from 'crypto'
import multer from 'fastify-multer'
import path from 'path'

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp')
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads')

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    async filename(req, file, cb) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`
      return cb(null, fileName)
    },
  }),
}

const uploadConfig = { MULTER, UPLOADS_FOLDER, TMP_FOLDER }

export default uploadConfig

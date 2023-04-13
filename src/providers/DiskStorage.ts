import * as fs from 'fs'
import * as path from 'path'
import uploadConfig from '@/config/upload'

export class DiskStorage {
  async saveFile(file: string) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file),
    )
    console.log(file)
    return file
  }

  async deleteFile(file: any) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

import { FastifyRequest } from 'fastify'

declare module 'fastify' {
  interface MulterRequest extends FastifyRequest {
    file: any
    files: any
  }
}

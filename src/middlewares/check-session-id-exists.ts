import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  replay: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return replay.status(404).send({
      error: 'Unauthorized.',
    })
  }
}

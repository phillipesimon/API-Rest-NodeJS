import { afterAll, beforeAll, describe, it } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions Routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction.', async () => {
    await request(app.server)
      .post('/transactiona')
      .send({
        title: 'Tudo zerado',
        amount: 36000,
        type: 'debit',
      })
      .expect(404)
  })
})

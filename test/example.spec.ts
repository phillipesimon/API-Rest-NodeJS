import { afterAll, beforeAll, test } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  console.log('Before all - waiting for app to be ready')
  await app.ready()
  console.log('Before all - app is ready')
})

afterAll(async () => {
  await app.close()
})

test('User can create a new transaction.', async () => {
  console.log('Test - sending request')
  await request(app.server)
    .post('/')
    .send({
      title: 'Tudo zerado',
      amount: 36000,
      type: 'debit',
    })
    .expect(404)
})

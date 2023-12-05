import 'dotenv/config'
import { knex as setupKnext, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATAVBASE_URL env not found')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnext(config)

import knex from 'knex'

declare module 'Knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id: string
    }
  }
}

import {MongoClient} from 'mongodb'

const URI = process.env.DATABASE_URI as string

export const connect = async () => {
    const client = await MongoClient.connect(URI)
    console.log('connect to mongodb.')
    const db = client.db()
    return {
      client,
      db
    }
}

export const COLLECTIONS = {
  CATEGORIES: 'categories',

}
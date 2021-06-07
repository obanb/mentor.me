import { Db } from 'mongodb'

export const getMentors = async (db: Db) => {
  return db.collection('users').find({}).toArray()
}

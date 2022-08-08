import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { readFileSync } from 'fs'
import { join } from 'path'

import { Resolvers } from 'graphql/dist/generated-server'

const path = join(process.cwd(), 'graphql', 'schema.graphql')
const typeDefs = readFileSync(path).toString('utf-8')

type Team = 'Red' | 'White'

const teams = (): { id: string; name: Team }[] => {
  return [
    { id: '1', name: 'Red' },
    { id: '2', name: 'White' },
  ]
}
type User = {
  id: string
  name: string
  address: string
  teamName: Team
}

// スキーマと実際のデータ構造の紐付けを resolvers で行う
const users = (): User[] => {
  return [
    { id: '1', name: 'Alice', address: 'america', teamName: 'Red' },
    { id: '2', name: 'Bob', address: 'canada', teamName: 'Red' },
    { id: '3', name: 'Carol', address: 'canada', teamName: 'White' },
  ]
}
const resolvers: Resolvers = {
  Query: {
    users: () => users(),
    teams: () => teams(),
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

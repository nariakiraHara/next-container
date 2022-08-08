import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { GetUsersNameDocument } from 'graphql/dist/generated-client'

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GetUsersNameDocument)

  if (loading) return <p>loading...</p>
  if (error || !data) {
    return <p>Error</p>
  }

  return (
    <ul>
      {data.users.map((user, index: number) => {
        return <li key={index}>{user.name}</li>
      })}
    </ul>
  )
}

export default Home

import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GetUsersAndTeamsDocument } from 'graphql/dist/generated-client'

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GetUsersAndTeamsDocument)

  useEffect(() => {
    console.log(JSON.stringify(data))
  }, [data])

  if (loading) return <p>loading...</p>
  if (error || !data) {
    return <p>Error</p>
  }

  return (
    <ul>
      {data.users.map((user, index: number) => {
        console.log(Object.getOwnPropertyNames(user)) // ['__typename', 'name']
        return <li key={index}>{user.teamName}</li>
      })}
    </ul>
  )
}

export default Home

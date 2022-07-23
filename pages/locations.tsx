import { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from 'server/location'
import Image from 'next/image'

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.locations.map(({ id, name, description, photo }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <Image
        width="400"
        height="250"
        alt="location-reference"
        src={`${photo}`}
      />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ))
}

export const Page: NextPage = () => {
  return (
    <>
      <DisplayLocations />
    </>
  )
}

export default Page

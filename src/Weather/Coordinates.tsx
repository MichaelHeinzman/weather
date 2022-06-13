import React from 'react'

type Props = {
  lon: number,
  lat: number,
}

const Coordinates = ({lon, lat}: Props) => {
  return (
    <>Longitude: {lon} Latitude: {lat}</>
  )
}

export default Coordinates
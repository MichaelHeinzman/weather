import React from 'react'

type Props = {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
}

const Sys = ({country, id, sunrise, sunset, type}: Props) => {
  return (
    <div>Country: {country} id: {id} sunrise: {sunrise} sunset: {sunset} type: {type}</div>
  )
}

export default Sys
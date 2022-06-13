import React from 'react'

type Props = {deg: number, speed: number}

const Wind = ({deg, speed}: Props) => {
  return (
    <div>Degree: {deg} Speed: {speed}</div>
  )
}

export default Wind
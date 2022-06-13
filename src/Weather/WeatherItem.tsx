import React from 'react'

type Props = {    
    description: string,
    icon: string,
    id: number,
    main: string,
}

const WeatherItem = ({description, icon, id, main}: Props) => {
  return (
    <>Description: {description} icon: {icon} id: {id} main: {main}</>
  )
}

export default WeatherItem
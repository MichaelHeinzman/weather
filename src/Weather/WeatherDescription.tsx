import React from 'react'
import WeatherItem from './WeatherItem'

type item = {    
    description: string,
    icon: string,
    id: number,
    main: string,
}

type Props = {
    weather: Array<item>
}
const WeatherDescription = ({weather}: Props) => {
  return (
    <>{weather.map((item) => <WeatherItem {...item}/>)}</>
  )
}

export default WeatherDescription
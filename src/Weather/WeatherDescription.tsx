import React from "react";
import TextFormat from "../Components/TextFormat";
import WeatherItem from "./WeatherItem";

type item = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Props = {
  weather: Array<item>;
};
const WeatherDescription = ({ weather }: Props) => {
  return (
    <TextFormat>
      {weather.map((item) => (
        <WeatherItem {...item} />
      ))}
    </TextFormat>
  );
};

export default WeatherDescription;

import React from "react";
import TextFormat from "../TextFormat";

type Props = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

const MainWeather = ({
  feels_like,
  humidity,
  pressure,
  temp,
  temp_max,
  temp_min,
}: Props) => {
  return (
    <TextFormat>
      Feels Like: {feels_like} Humidity: {humidity}, Pressure: {pressure} Temp:{" "}
      {temp} Max Temp: {temp_max} Min Temp: {temp_min}{" "}
    </TextFormat>
  );
};

export default MainWeather;

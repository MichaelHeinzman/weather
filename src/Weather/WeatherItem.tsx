import React from "react";
import TextFormat from "../TextFormat";

type Props = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

const WeatherItem = ({ description, icon, id, main }: Props) => {
  return (
    <TextFormat>
      Description: {description} icon: {icon} id: {id} main: {main}
    </TextFormat>
  );
};

export default WeatherItem;

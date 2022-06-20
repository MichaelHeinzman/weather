import React from "react";
import TextFormat from "../Components/TextFormat";

type Props = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

const Sys = ({ country, id, sunrise, sunset, type }: Props) => {
  return (
    <TextFormat>
      Country: {country} id: {id} sunrise: {sunrise} sunset: {sunset} type:{" "}
      {type}
    </TextFormat>
  );
};

export default Sys;

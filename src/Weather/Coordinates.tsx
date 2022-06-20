import React from "react";
import TextFormat from "../Components/TextFormat";

type Props = {
  lon: number;
  lat: number;
};

const Coordinates = ({ lon, lat }: Props) => {
  return (
    <TextFormat>
      Longitude: {lon} Latitude: {lat}
    </TextFormat>
  );
};

export default Coordinates;

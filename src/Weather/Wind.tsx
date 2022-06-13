import React from "react";
import TextFormat from "../TextFormat";

type Props = { deg: number; speed: number };

const Wind = ({ deg, speed }: Props) => {
  return (
    <TextFormat>
      Degree: {deg} Speed: {speed}
    </TextFormat>
  );
};

export default Wind;

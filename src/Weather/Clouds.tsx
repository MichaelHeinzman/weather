import React from "react";
import TextFormat from "../TextFormat";

type Props = {
  all: number;
};

const Clouds = ({ all }: Props) => {
  return <TextFormat>Clouds: {all}</TextFormat>;
};

export default Clouds;

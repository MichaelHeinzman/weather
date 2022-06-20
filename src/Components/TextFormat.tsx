import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: any;
  size?: string;
  color?: string;
};

const TextFormat = ({ children, size, color }: Props) => {
  return (
    <Typography color={color || "white"} fontSize={size || "md"}>
      {children}
    </Typography>
  );
};

export default TextFormat;

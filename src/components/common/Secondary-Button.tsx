import { Button, SxProps, Theme } from "@mui/material";
import React from "react";

interface simpleButtonInterface {
  label: string;
  sx?: SxProps<Theme>;
}

const Secondarybutton = ({ label, sx }: simpleButtonInterface) => {
  return <Button sx={{ ...sx }}> {label}</Button>;
};

export default Secondarybutton;

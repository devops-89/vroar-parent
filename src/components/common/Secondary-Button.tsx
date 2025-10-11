import { Button, ButtonProps, SxProps, Theme } from "@mui/material";
import React from "react";

interface simpleButtonInterface extends Omit<ButtonProps, "sx"> {
  label: string;
  sx?: SxProps<Theme>;
}

const Secondarybutton = ({ label, sx, ...props }: simpleButtonInterface) => {
  return (
    <Button sx={{ ...sx }} {...props}>
      {" "}
      {label}
    </Button>
  );
};

export default Secondarybutton;

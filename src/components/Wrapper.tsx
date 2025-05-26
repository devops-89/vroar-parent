import { LayoutProps } from "@/utils/types";
import { Box } from "@mui/material";
import React from "react";

const Wrapper = ({ children }: LayoutProps) => {
  return <Box sx={{ marginLeft: { lg: "300px", xs: 0 } }}>{children}</Box>;
};

export default Wrapper;

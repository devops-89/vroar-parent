import { LayoutProps } from "@/utils/types";
import { Box } from "@mui/material";
import React from "react";

const Wrapper = ({ children }: LayoutProps) => {
  return <Box sx={{ marginLeft: "300px" }}>{children}</Box>;
};

export default Wrapper;

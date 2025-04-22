import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        height: "100vh",
        background: COLORS.SIDEBAR_GRADIENT,
        width: 250,
      }}
    >
      Hello
    </Box>
  );
};

export default Sidebar;

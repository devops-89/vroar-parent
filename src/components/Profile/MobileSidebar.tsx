import { MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

const MobileSidebar = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton sx={{ position: "absolute" }}>
        <MoreVert />
      </IconButton>
    </Box>
  );
};

export default MobileSidebar;

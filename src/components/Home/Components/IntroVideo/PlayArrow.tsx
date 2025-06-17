import { COLORS } from "@/utils/enum";
import { PlayArrow } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

const PlayArrowButton = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        sx={{
          borderRadius: 50,
          backgroundColor: COLORS.PRIMARY,
          width: 50,
          height: 50,
          "&:hover": {
            backgroundColor: COLORS.PRIMARY,
          },
          position: "absolute",
          zIndex: 999,
        }}
      >
        <PlayArrow sx={{ color: COLORS.WHITE }} />
      </IconButton>
    </Box>
  );
};

export default PlayArrowButton;

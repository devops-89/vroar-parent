import { nunito } from "@/utils/fonts";
import { PLAN_BADGES } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const PlanBadges = ({ bgColor, border, label, color }: PLAN_BADGES) => {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        p: "12px",
        borderRadius: "12px",
        border: border,
        color: color,
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          fontFamily: nunito.style,
          textTransform: "uppercase",
          color: color,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default PlanBadges;

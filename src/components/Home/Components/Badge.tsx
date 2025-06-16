import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box } from "@mui/material";
import React from "react";

const Badge = ({ label }: { label: string }) => {
  return (
    <Box
      sx={{
        border: "1px solid #dedede",
        color: COLORS.PRIMARY,
        fontFamily: nunito.style,
        borderRadius: "1.5rem",
        padding: "0.25rem .75rem",
        fontSize: ".75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        width: 100,
      }}
    >
      About Us
    </Box>
  );
};

export default Badge;

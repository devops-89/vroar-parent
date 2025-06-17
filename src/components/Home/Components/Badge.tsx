import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box } from "@mui/material";
import React from "react";

const Badge = ({
  label,
  width,
  margin,
}: {
  label: string;
  width: number | string;
  margin?: string;
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #dedede",
        color: COLORS.PRIMARY,
        fontFamily: nunito.style.fontFamily,
        borderRadius: "1.5rem",
        padding: "0.25rem .75rem",
        fontSize: ".75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        width: width,
        textAlign: "center",
        margin: margin,
      }}
    >
      {label}
    </Box>
  );
};

export default Badge;

import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import React from "react";

const Badge = ({
  label,
  width,
  margin,
  sx,
}: {
  label: string;
  width?: number | string;
  margin?: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #dedede",
        color: COLORS.PRIMARY,
        fontFamily: nunito.style.fontFamily,
        borderRadius: "1.5rem",
        padding: "4px 12px 2px",
        fontSize: ".75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        width: width,
        textAlign: "center",
        margin: margin,
        backgroundColor: "#FFF9EA",
        ...sx,
      }}
    >
      {label}
    </Box>
  );
};

export default Badge;

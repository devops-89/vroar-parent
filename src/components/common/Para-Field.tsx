import { nunito } from "@/utils/fonts";
import { Typography, SxProps, Theme } from "@mui/material";
import React from "react";

interface ParaFieldProps {
  fontSize?: string | number;
  color?: string;
  label: string;
  textAlign?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
  className?: string;
}
const ParaField = ({
  fontSize,
  color,
  label,
  textAlign,
  sx = {},
  className,
}: ParaFieldProps) => {
  return (
    <Typography
      sx={{
        fontFamily: nunito.style.fontFamily,
        fontSize,
        color,
        textAlign,
        ...sx, // Merge custom sx
      }}
      className={className}
    >
      {label}
    </Typography>
  );
};

export default ParaField;

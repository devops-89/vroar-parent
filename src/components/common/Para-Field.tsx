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
  dataaos?: string;
}
const ParaField = ({
  fontSize,
  color,
  label,
  textAlign,
  sx = {},
  className,
  dataaos,
}: ParaFieldProps) => {
  return (
    <Typography
      sx={{
        fontFamily: nunito.style.fontFamily,
        fontSize: fontSize || 24,
        color,
        textAlign,
        ...sx, // Merge custom sx
      }}
      className={className}
      data-aos={dataaos}
    >
      {label}
    </Typography>
  );
};

export default ParaField;

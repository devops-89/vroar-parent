import { COLORS } from "@/utils/enum";
import { SxProps, Theme, Typography } from "@mui/material";
import React from "react";
interface HeadingFieldProps {
  fontSize?: string | number;
  color?: string;
  textAlign?: "left" | "center" | "right";
  label: string;
  sx?: SxProps<Theme>;
  className?: string;
  dataaos?: string;
}
const GradientText = ({
  fontSize,
  color,
  textAlign,
  label,
  sx,
  className,
  dataaos,
}: HeadingFieldProps) => {
  return (
    <Typography
      sx={{
        backgroundImage: COLORS.TEXT_GRADIENT,
        backgroundClip: "text",
        color: COLORS.TRANSPARENT,
        fontSize: 68,
        fontFamily: "gomenasans-bold,Arial,sans-serif",
        fontWeight: 700,
        textAlign: "center",
        ...sx,
      }}
      className={className}
      data-aos={dataaos}
    >
      {label}
    </Typography>
  );
};

export default GradientText;

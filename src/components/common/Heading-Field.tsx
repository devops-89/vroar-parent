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
const HeadingField = ({
  fontSize,
  color,
  textAlign,
  label,
  sx = {},
  className,
  dataaos,
}: HeadingFieldProps) => {
  return (
    <Typography
      sx={{
        fontSize: fontSize || 68,
        fontFamily: "gomenasans,Arial, sans-serif",
        fontWeight: 700,
        textAlign: textAlign || "center",
        mt: 2,
        color: color,
        letterSpacing: "-.04rem",
        ...sx,
      }}
      className={className}
      data-aos={dataaos}
    >
      {label}
    </Typography>
  );
};

export default HeadingField;

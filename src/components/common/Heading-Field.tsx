import { SxProps, Theme, Typography } from "@mui/material";
import React, { ComponentProps } from "react";
type HeadingFieldProps = {
  fontSize?: string | number;
  color?: string;
  textAlign?: "left" | "center" | "right";
  label: string;
  sx?: SxProps<Theme>;
  className?: string;
  dataaos?: string;
} & Omit<ComponentProps<typeof Typography>, "sx" | "className" | "color" | "align" | "children">;
const HeadingField = ({
  fontSize,
  color,
  textAlign,
  label,
  sx = {},
  className,
  dataaos,
  ...rest
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
      {...rest}
    >
      {label}
    </Typography>
  );
};

export default HeadingField;

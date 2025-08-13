import { LayoutProps } from "@/utils/types";
import { Box, SxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";
interface IconBoxProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const IconBox = ({ children, sx }: IconBoxProps) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#ffb7a6, #fff 35%)",
        borderRadius: "32px",
        width: 30,
        height: 30,
        boxShadow:
          "inset 0 1.32px 1.32px #fff,0 .99px .66px .99px #f6ff0040,0 -.66px 1.32px 1.32px #000",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default IconBox;

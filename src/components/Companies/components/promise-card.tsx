import type { ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";

interface promise_Card_props {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const PromiseCard = ({ children, sx }: promise_Card_props) => {
  return (
    <Box
      sx={{
        border: "1px solid #f3f3f3",
        width: {lg:320,xs:"100%"},
        borderRadius: "20px",
        padding: "20px",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default PromiseCard;

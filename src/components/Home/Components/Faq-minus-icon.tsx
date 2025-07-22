import { COLORS } from "@/utils/enum";
import { Close, Remove } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const FaqMinusIcon = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#ffb7a6,#fff 35%)",
        borderRadius: "48px",
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow:
          "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff;",
      }}
    >
      <Close sx={{ color: COLORS.PRIMARY }} />
    </Box>
  );
};

export default FaqMinusIcon;

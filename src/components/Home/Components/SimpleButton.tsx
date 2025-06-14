import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Button } from "@mui/material";
import React from "react";

const SimpleButton = ({ label }: { label: string }) => {
  return (
    <Button
      sx={{
        borderRadius: "10rem",
        background: COLORS.LINEAR_GRADIENT,
        color: COLORS.WHITE,
        fontFamily: nunito.style,
        boxShadow: "inset 0 0 #0000,0 4px 12px #fd9065",
        border: "2px solid #ffddd5",
        fontWeight: 700,
        textTransform: "initial",
        padding: "12px 24px",
        fontSize: 16,
      }}
    >
      {label}
    </Button>
  );
};

export default SimpleButton;

import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Button, Box, Theme, SxProps } from "@mui/material";
import React from "react";

const SimpleButton = ({
  label,
  sx,
}: {
  label: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Button
      sx={{
        borderRadius: "10rem",
        background: COLORS.BUTTON_COLOR,
        color: COLORS.WHITE,
        fontFamily: nunito.style.fontFamily,
        boxShadow: "inset 0 0 #0000, 0 4px 12px #fd9065",
        border: "2px solid #ffddd5",
        fontWeight: 700,
        textTransform: "initial",
        padding: "12px 24px",
        fontSize: 16,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "inset 0 0 #0000, 0 6px 16px #fd9065",
        },
        "&:hover .text-track": {
          transform: "translateY(-50%)",
        },
        ...sx,
      }}
    >
      {/* Text Swap Animation */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "1.5rem",
        }}
      >
        <Box
          className="text-track"
          sx={{
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.4s ease",
          }}
        >
          {[0, 1].map((idx) => (
            <Box
              key={idx}
              sx={{
                height: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Box>
    </Button>
  );
};

export default SimpleButton;

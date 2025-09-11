import React, { ReactNode } from "react";
import { Box, Button, SxProps, Theme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";

const ButtonWithIcon = ({
  label,
  width = "180px",
  sx,
}: {
  label: ReactNode;
  width?: string | number;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Button
      sx={{
        color: COLORS.WHITE,
        background: "linear-gradient(#fd9065 16%, #ca2600 81%)",
        borderRadius: "10rem",
        border: "2px solid #ffddd5",
        padding: "8px 16px",
        fontWeight: 700,
        fontSize: { lg: 16, xs: 12 },
        fontFamily: nunito.style.fontFamily,
        boxShadow: "inset 0 0 #0000, 0 4px 12px #fd9065",
        transition: "all 0.3s ease",
        textTransform: "none",
        width,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          boxShadow: "inset 0 0 #0000, 0 6px 16px #fd9065",
        },
        "&:hover .text-track": {
          transform: "translateY(-50%)",
        },
        "&:hover .icon-track": {
          transform: "translateY(-25%)",
        },
        "&:hover .arrow-rotate": {
          transform: "rotate(0deg) scale(1.1)",
        },
        ".icon-track": {
          transform: "translateY(25%)",
        },
        ...sx,
      }}
    >
      <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}>
        {/* Text swap viewport */}
        <Box
          className="text-viewport"
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "2.5rem",
            minWidth: "11ch",
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
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{ lineHeight: "2.5rem", textAlign: "center" }}
                >
                  {label}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            overflow: "hidden",
            position: "relative",
            right: 0,
          }}
        >
          <Box
            className="icon-track"
            sx={{
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.4s ease",
              willChange: "transform",
            }}
          >
            {[0, 1].map((idx) => (
              <Box
                key={idx}
                sx={{
                  width: "100%",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  className="arrow-rotate"
                  sx={{
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotate(325deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <ArrowForward sx={{ color: COLORS.PRIMARY, fontSize: 20 }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Button>
  );
};

export default ButtonWithIcon;

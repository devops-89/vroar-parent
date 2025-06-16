import React from "react";
import { Box, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";

const ButtonWithIcon = () => {
  return (
    <Button
      sx={{
        color: COLORS.WHITE,
        background: "linear-gradient(#fd9065 16%, #ca2600 81%)",
        borderRadius: "10rem",
        border: "2px solid #ffddd5",
        padding: ".75rem 1.5rem",
        fontWeight: 700,
        fontSize: "1rem",
        fontFamily: nunito.style,
        boxShadow: "inset 0 0 #0000, 0 4px 12px #fd9065",
        transition: "all 0.3s ease",
        ":hover": {
          boxShadow: "inset 0 0 #0000, 0 6px 16px #fd9065",
          // "& .arrow-track": {
          //   transform: "translateY(-50%) rotate(325deg)",
          // },
        },
      }}
      endIcon={
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
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            className="arrow-track"
            sx={{
              position: "absolute",
              width: "100%",
              height: "200%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              transform: "rotate(325deg)", 
              transition: "transform 0.4s ease",
            }}
          >
            <ArrowForward sx={{ color: COLORS.PRIMARY }} />
            {/* <ArrowForward sx={{ color: COLORS.PRIMARY }} /> */}
          </Box>
        </Box>
      }
    >
      Get Started Today
    </Button>
  );
};

export default ButtonWithIcon;

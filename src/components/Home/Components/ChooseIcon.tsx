import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import img from "@/homePage/choose-icon1.avif";
import Image from "next/image";
import { nunito } from "@/utils/fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const text = "CAREER COUNSEL";
const radius = 40; // radius of the circle for the text
const startAngle = -90 - (text.length * 8) / 2; // center the text

const CurvedBadge = ({ icon }: { icon: StaticImport }) => (
  <Box
    sx={{
      position: "relative",
      width: 100,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      boxShadow: 2,
      overflow: "visible",
      // Add animation on hover
      "&:hover .curved-text-wrapper": {
        animation: "rotateText 2s linear infinite",
      },
      // Define keyframes in sx
      "@keyframes rotateText": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      backgroundColor: "#fff",
    }}
  >
    {/* Curved Text */}
    <Box
      className="curved-text-wrapper"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        // No transition here, animation is handled on hover
      }}
    >
      {text.split("").map((char, i) => {
        const angle = startAngle + i * 16; // adjust 16 for spacing
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <Typography
            key={i}
            component="span"
            sx={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              fontSize: 12,
              color: "#888",
              letterSpacing: 1,
              textTransform: "uppercase",
              userSelect: "none",
              pointerEvents: "none",
              fontFamily: nunito.style,
            }}
          >
            {char}
          </Typography>
        );
      })}
    </Box>
    {/* Center Badge */}
    <Avatar
      sx={{
        width: 60,
        height: 60,
        boxShadow: 3,
        zIndex: 1,
      }}
    >
      <Image src={icon} alt="choose-icon" width={60} height={60} />
    </Avatar>
  </Box>
);

export default CurvedBadge;

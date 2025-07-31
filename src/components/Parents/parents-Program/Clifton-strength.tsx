import { Box, Typography } from "@mui/material";
import React from "react";
import cliftonBanner from "@/icons/parents-program/clifton_banner.avif";
import cliftonIcon from "@/icons/parents-program/clifton-strength.avif";
import { nunito } from "@/utils/fonts";
import Image from "next/image";
const CliftonStrength = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cliftonBanner.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        borderRadius: "20px",
        alignItems: "stretch",
        display: "flex",
        justifyContent: "space-between",

        height: "250px",
      }}
    >
      <Box sx={{ width: 400,padding:"32px" }}>
        <Typography
          sx={{
            mt: 1,
            fontSize: 32,
            fontFamily: nunito.style,
            fontWeight: 700,
            textAlign: "justify",
            lineHeight: 1.2,
          }}
        >
          Clifton Strengths
        </Typography>
        <Typography
          sx={{
            // mt: 3,
            fontSize: 20,
            fontFamily: nunito.style,
            textAlign: "justify",
            lineHeight: 1.4,
          }}
        >
          Powered by CliftonStrengths and trusted by 90% of Fortune 100
          companies
        </Typography>
      </Box>
      <Image
        src={cliftonIcon}
        alt=""
        style={{ height: 150, marginTop: "auto", width: 150 }}
      />
    </Box>
  );
};

export default CliftonStrength;

import React from "react";
import bannerImage from "@/banner/support-banner.webp";
import { Box, Container } from "@mui/material";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        height: "60vh",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <HeadingField
          label="Privacy Policy"
          sx={{
            fontSize: 64,
            fontFamily: "gomenasans-bold",
            color: COLORS.WHITE,
          }}
        />
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

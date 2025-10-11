import React from "react";
import bannerImage from "@/banner/support-banner.webp";
import { Box, Container } from "@mui/material";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import PrivacyPolicyLayout from "@/components/privacy-policy";
const PrivacyPolicy = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          height: { lg: "60vh", xs: "40vh" },
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
              fontSize: { lg: 64, xs: 35 },
              fontFamily: "gomenasans-bold",
              color: COLORS.WHITE,
            }}
          />
        </Container>
      </Box>
      <Box sx={{}}></Box>

      <PrivacyPolicyLayout />
    </Box>
  );
};

export default PrivacyPolicy;

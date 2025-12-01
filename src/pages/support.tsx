import { Box, Container } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/support-banner.webp";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import Contact from "@/components/Home/Contact";
import Supportlayout from "@/components/support";
const Support = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // py: 20,
          height: { lg: "60vh", xs: "40vh" },
        }}
      >
        <Container maxWidth="lg">
          <HeadingField
            label="We're Here for You, Anytime"
            sx={{
              color: COLORS.WHITE,
              fontSize: { lg: 64, xs: 35 },
              letterSpacing: "-.04rem",
              fontFamily: "gomenasans-bold",
            }}
          />
        </Container>
      </Box>

      <Box sx={{}}>
        <Contact />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Supportlayout />
      </Box>
    </Box>
  );
};

export default Support;

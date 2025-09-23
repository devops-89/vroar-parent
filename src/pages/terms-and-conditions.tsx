import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/support-banner.webp";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import ContentSidebar from "@/components/widgets/sidebar";
import { TERMS_CONTENT_SIDEBAR } from "@/assets/contentSidebar";
import Overview from "@/components/common/privacy/overview";
const Terms = () => {
  return (
    <Box>
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
            label="Terms and Conditions"
            sx={{
              fontSize: 64,
              fontFamily: "gomenasans-bold",
              color: COLORS.WHITE,
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={5}>
          <Grid size={3}>
            <ContentSidebar data={TERMS_CONTENT_SIDEBAR} />
          </Grid>
          <Grid size={9}>
            <Overview description="Welcome to MyTreks, a revolutionary platform designed to connect students with companies, mentors, career counselors and coaches. These Terms and Conditions and Privacy Policy govern your use of our services. By accessing or using MyTreks (the “App”), you agree to be bound by these policies. Our platform serves multiple user roles—including Students, Parents, Companies, and Mentors—and each category is subject to additional terms outlined below." />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Terms;

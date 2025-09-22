import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg_image from "@/pricing/web_view.avif";
import Badge from "@/components/Home/Components/Badge";
import HeadingField from "@/components/common/Heading-Field";
import GradientText from "@/components/common/Greadient-text";
import ParaField from "@/components/common/Para-Field";
import { UserController } from "@/assets/api/UserController";
import { SUBSCRIPTION_PLAN, SUBSCRIPTION_PLANS } from "@/utils/types";
import PlanCard from "@/components/PlanCard";
import { NEW_PLAN_FEATURES, plans_data } from "@/assets/plans";
import PricingSection from "./pricing-section";
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg_image.src})`,
        height: "100%",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        py: 20,
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={{ lg: 8, xs: 12 }} margin={"auto"}>
            <Badge label="Pricing" margin="auto" width={100} />

            <HeadingField
              label="Plans that will help"
              sx={{
                fontFamily: "gomenasans-bold",
                lineHeight: 1.4,
                letterSpacing: "-.04rem",
                fontSize: { lg: 64, xs: 35 },
              }}
              dataaos="fade-left"
            />
            <GradientText
              label="your child's future!"
              sx={{
                fontFamily: "gomenasans-bold",
                lineHeight: 1.1,
                fontSize: { lg: 64, xs: 35 },
              }}
              dataaos="fade-left"
              data-aos-delay="300"
            />
            <ParaField
              label="No matter when you join, your overall investment stays the same"
              sx={{ fontSize: 24, textAlign: "center", mt: 2 }}
              dataaos="fade-left"
              data-aos-delay="400"
            />
          </Grid>
        </Grid>
        {/* <Grid container mt={5} spacing={5}>
          {subscriptionPlans?.slice(0, 1).map((val, i) => (
            <Grid key={val.id ?? i} size={6} margin={"auto"}>
              <PlanCard
                description={val.description}
                id={val.id}
                name={val.name}
                prices={val.prices}
                benefits={val.benefits}
              />
            </Grid>
          ))}
        </Grid> */}
        <PricingSection />
      </Container>
    </Box>
  );
};

export default HeroSection;

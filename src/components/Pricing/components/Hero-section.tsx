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
import { plans_data } from "@/assets/plans";
const HeroSection = () => {
  const [subscriptionPlans, setSubscriptionPlans] =
    useState<SUBSCRIPTION_PLANS[]>();
  const getPlans = () => {
    UserController.getPlansPublic()
      .then((res) => {
        // console.log("res", res);
        const response = res.data.data;
        const mergedArray = response.map((apiPlan: any) => {
          const staticPlan = plans_data.find(
            (staticPlan: any) => staticPlan.id === apiPlan.id
          );

          return {
            ...apiPlan,
            ...(staticPlan || {}),
          };
        });

        setSubscriptionPlans(mergedArray as SUBSCRIPTION_PLANS[]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getPlans();
  }, []);


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
          <Grid size={8} margin={"auto"}>
            <Badge label="Pricing" margin="auto" width={100} />

            <HeadingField
              label="Plans that will help"
              sx={{
                fontFamily: "gomenasans-bold",
                lineHeight: 1.4,
                letterSpacing: "-.04rem",
              }}
              dataaos="fade-left"
            />
            <GradientText
              label="your child's future!"
              sx={{ fontFamily: "gomenasans-bold", lineHeight: 1.1 }}
              dataaos="fade-left"
              data-aos-delay="300"
            />
            <ParaField
              label="Flexible pricing to match your needs. Get started today!"
              sx={{ fontSize: 24, textAlign: "center", mt: 2 }}
              dataaos="fade-left"
              data-aos-delay="400"
            />
          </Grid>
        </Grid>
        <Grid container mt={5} spacing={5}>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

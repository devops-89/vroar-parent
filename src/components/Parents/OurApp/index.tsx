import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AppFeatureCard from "./App-Feature-Card";
import img1 from "@/banner/parents/App/track-challenge.avif";
import img2 from "@/banner/parents/App/updates.avif";
import img3 from "@/banner/parents/App/alerts.avif";
import img4 from "@/banner/parents/App/support.avif";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import WhyMyTreks from "./why_Mytreks";
const OurParentApp = () => {
  const appData = [
    {
      img: img1,
      heading: "Track challenges",
      description: "Track challenges completed",
    },
    {
      img: img2,
      heading: "View Updates",
      description: "View coaching and mentorship updates",
    },
    {
      img: img3,
      heading: "Get alerts",
      description: "Get alerts for key deadlines and workshops",
    },
    {
      img: img4,
      heading: "Support them",
      description: "without stepping on their independence",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#fff3f0" }}>
      <Container sx={{ paddingTop: "80px" }} >
        <Grid container>
          <Grid size={10} margin="auto">
            <Badge label="Our App" width={100} margin="auto" />
            <HeadingField
              label="Stay Informed. Not Overwhelmed."
              fontSize={68}
            />
            <ParaField
              label="Our secure app gives you a transparent view of your child’s growth without any micromanagement."
              fontSize={20}
              sx={{ textAlign: "center" }}
              color={COLORS.LIGHT_BLACK}
            />
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {appData.map((val, i) => (
                <Grid size={6} key={i}>
                  <AppFeatureCard
                    img={val.img}
                    heading={val.heading}
                    description={val.description}
                  />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: "center" }}>
              <ButtonWithIcon
                label="get Demo of the App"
                sx={{ textTransform: "capitalize", mt: 8 }}
                width={250}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={12}>
            <Box sx={{ pt: 5 }}>
              <WhyMyTreks />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurParentApp;

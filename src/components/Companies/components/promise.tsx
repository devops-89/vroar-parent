import React from "react";
import bg from "@/Mentors/why_join.avif";
import { Box, Container, Grid } from "@mui/material";
import Badge from "@/components/Home/Components/Badge";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import ParaField from "@/components/common/Para-Field";
import AppIconAnimation from "@/components/Parents/OurApp/App-icon_animation";
const Promise = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        height: "130vh",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        py: 10,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={10} margin="auto">
            <Badge label="our promise" width={120} margin="auto" />
            <HeadingField
              label="Together, We Shape Futures"
              sx={{
                fontFamily: "gomenasans-bold",
                color: COLORS.WHITE,
                letterSpacing: "-.04em",
                lineHeight: 1.1,
                mt: 3,
              }}
            />
            <ParaField
              label="From internships to coaching, we help teens connect passion to profession, especially those in underserved communities and military households."
              sx={{
                color: COLORS.WHITE,
                fontSize: 20,
                textAlign: "center",
                mt: 2,
              }}
            />
            <Box></Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppIconAnimation />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Promise;

import React from "react";
import bg from "@/Mentors/why_join.avif";
import { Box, Container, Grid } from "@mui/material";
import Badge from "@/components/Home/Components/Badge";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import ParaField from "@/components/common/Para-Field";
import AppIconAnimation from "@/components/Parents/OurApp/App-icon_animation";
import PromiseCard from "./promise-card";
const Promise = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        height: { lg: "130vh", xs: "100%" },
        backgroundPosition: "50%",
        backgroundSize: "cover",
        py: 10,
        position: "relative",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin="auto">
            <Badge label="our promise" width={120} margin="auto" />
            <HeadingField
              label="Together, We Shape Futures"
              sx={{
                fontFamily: "gomenasans-bold",
                color: COLORS.WHITE,
                letterSpacing: "-.04em",
                lineHeight: 1.1,
                mt: 3,
                fontSize: { lg: 64, xs: 35 },
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
            <Box sx={{ position: "relative", mt: 10 }}>
              <Box
                sx={{
                  position: { lg: "absolute" },
                  display: { lg: "flex", xs: "block" },
                  alignItems: "center",
                  justifyContent: { lg: "space-between", xs: "center" },
                  zIndex: 999,
                  width: "100%",
                }}
              >
                <PromiseCard
                  sx={{ backgroundColor: COLORS.WHITE, mb: { xs: 5 } }}
                >
                  <ParaField
                    label="COMPANIES"
                    sx={{
                      color: COLORS.PRIMARY,
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  />
                  <ParaField
                    label="You have the power to change lives without changing your calendar"
                    sx={{ fontSize: 18, fontWeight: 700, mt: 2 }}
                  />
                </PromiseCard>
                <PromiseCard sx={{ backgroundColor: COLORS.WHITE }}>
                  <ParaField
                    label="PARENTS"
                    sx={{
                      color: COLORS.PRIMARY,
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  />
                  <ParaField
                    label="Your child deserves more than test scores. They deserve a launchpad"
                    sx={{ fontSize: 18, fontWeight: 700, mt: 2 }}
                  />
                </PromiseCard>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppIconAnimation />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PromiseCard
                  sx={{
                    position: "absolute",
                    mt: "-40px",
                    background: COLORS.TEXT_GRADIENT,
                    border: "none",
                  }}
                >
                  <ParaField
                    label="MYTREKS"
                    sx={{
                      color: COLORS.WHITE,
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  />
                  <ParaField
                    label="With MyTreks.ai, we build that launchpad together"
                    sx={{
                      color: COLORS.WHITE,
                      fontSize: 18,
                      fontWeight: 700,
                      mt: 2,
                    }}
                  />
                </PromiseCard>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Promise;

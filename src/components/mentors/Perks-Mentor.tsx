import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Badge from "../Home/Components/Badge";
import GradientText from "../common/Greadient-text";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import LeaderShipCard from "../Parents/parents-Program/Leadership-card";
import clock from "@/banner/mentors/Mentor_perks/clock.avif";
import clock_banner from "@/icons/parents-program/leader-ship-banner.avif";
import ConfidenceCurriculum from "../Parents/parents-Program/Confidence-Curriculum";
import target_banner from "@/icons/parents-program/confidence_banner.avif";
import target from "@/banner/mentors/Mentor_perks/target.avif";
import coins from "@/banner/mentors/Mentor_perks/coin.avif";
import calendar from "@/banner/mentors/Mentor_perks/calendar.avif";
import CareerPlaning from "../Parents/parents-Program/Career-Planing";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileProgramCard from "../common/mobile-program-card";
import { MENTOR_PAGE_PROGRAM_CARD } from "@/assets/Counseling";
const PerksMentor = () => {
  const perks = [
    {
      img: coins.src,
      heading: "Meaningful Connections",
      description: "Students must earn coins to meet with you",
      height: "60vh",
    },
    {
      img: calendar.src,
      heading: "Flexible Scheduling",
      description: "Work within your availability ",
      height: "60vh",
    },
  ];
  return (
    <Box sx={{ pt: 5, pb: 10 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Perks of a Mentor" width={180} margin="auto" />
            <Stack spacing={{ lg: -4, xs: -2 }}>
              <GradientText
                label="Be the Voice"
                sx={{ fontSize: { lg: 68, xs: 35 } }}
              />
              <HeadingField
                label="You Once Needed"
                sx={{ fontSize: { lg: 68, xs: 35 } }}
              />
            </Stack>
            <ParaField
              label="With just one hour each month, you can open doors, spark curiosity, and shape the future of a student who’s earned the chance to speak with you."
              sx={{ fontSize: { lg: 24, xs: 20 } }}
              color="#5E5E5E"
              textAlign="center"
            />
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
              <Grid container spacing={4} sx={{ mt: 10 }}>
                <Grid size={4}>
                  <LeaderShipCard
                    icon={clock}
                    backgroundImage={clock_banner.src}
                    heading="Minimal Time Commitment"
                    description="Just one hour monthly"
                  />
                </Grid>
                <Grid size={8}>
                  <Grid container spacing={4}>
                    <Grid size={12}>
                      <ConfidenceCurriculum
                        backgroundImage={target_banner.src}
                        img={target}
                        heading="Maximum Impact"
                        description="Guide students who are truly invested"
                      />
                    </Grid>
                    {perks.map((val, i) => (
                      <Grid size={6} key={i}>
                        <CareerPlaning
                          img={val.img}
                          heading={val.heading}
                          description={val.description}
                          height={val.height}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: { lg: "none", xs: "block" } }}>
              <Swiper>
                {MENTOR_PAGE_PROGRAM_CARD.map((val, i) => (
                  <SwiperSlide key={i}>
                    <MobileProgramCard
                      img={val.img}
                      heading={val.heading}
                      description={val.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PerksMentor;

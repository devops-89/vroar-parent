import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import backgroundBanner from "@/banner/mentors/mentor_banner.avif";
import HeadingField from "@/components/common/Heading-Field";
import GradientText from "@/components/common/Greadient-text";
import ParaField from "@/components/common/Para-Field";
import MentorMiddle from "@/components/mentors/Mentor-Middle";
import CurvedBadge from "@/components/Home/Components/ChooseIcon";
import hat from "@/homePage/choose-icon1.avif";
import img2 from "@/homePage/choose-icon2.avif";
import img4 from "@/icons/mentor_star.svg";
import img3 from "@/icons/bulb.avif";
import MentorAbout from "@/components/mentors/Mentor_About";
import PerksMentor from "@/components/mentors/Perks-Mentor";
import Bementor from "@/components/mentors/Be-A-Mentor";
const Mentors = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundBanner.src})`,
          height: "100%",
          backroundSize: "cover",
          backgroundPosition: "50%",
          pt: 20,
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Grid container>
            <Grid size={8} margin={"auto"}>
              <Stack spacing={-2}>
                <GradientText label="Shape Lives" />
                <HeadingField label="in Just 1 Hour A Month" />
              </Stack>
              <ParaField
                label="Become a mentor or speaker."
                textAlign="center"
                fontSize={24}
              />
              <Box sx={{ position: "relative" }}>
                <MentorMiddle />
                <Stack
                  direction={"row"}
                  alignItems={"ceenter"}
                  justifyContent={"space-between"}
                  sx={{
                    position: "absolute",
                    top: "20%",
                    width: "100%",
                  }}
                >
                  <CurvedBadge icon={hat} char="mytrekship" />
                  <CurvedBadge icon={img2} char="Career Counsel" />
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ position: "relative" }}>
            <Stack
              direction={"row"}
              alignItems={"ceenter"}
              justifyContent={"space-between"}
              sx={{
                position: "absolute",
                top: -100,
                width: "100%",
              }}
            >
              <CurvedBadge icon={img3} char="coaching strengths" />
              <CurvedBadge icon={img4} char="Career voyage" />
            </Stack>
          </Box>
        </Container>
      </Box>
      <MentorAbout />

      <PerksMentor />
      <Bementor />
    </Box>
  );
};

export default Mentors;

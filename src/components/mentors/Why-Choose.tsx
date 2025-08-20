import { Box, Container, Grid } from "@mui/material";
import React from "react";
import whyChoose from "@/Mentors/why_join.avif";
import HeadingField from "../common/Heading-Field";
import { COLORS } from "@/utils/enum";
import ParaField from "../common/Para-Field";
import ButtonWithIcon from "../Home/Components/ButtonWithIcon";
import SpeakerMentorAnimation from "./Components/Speaker-Mentor-animation";
const WhyChoose = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundImage: `url(${whyChoose.src})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            borderRadius: "57px",
            padding: "60px 40px 60px 60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Grid container>
              <Grid size={6}>
                <HeadingField
                  label="Why Choose? Be Both!"
                  color={COLORS.WHITE}
                  textAlign="left"
                  sx={{
                    letterSpacing: "-2.56px",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                />
                <ParaField
                  label="Mentors and speakers in our community connect with students in two powerful ways, amplifying their influence"
                  fontSize={20}
                  color={COLORS.WHITE}
                  sx={{ lineHeight: 1.4, mt: 3 }}
                />
                <ButtonWithIcon label="Apply Now" sx={{ mt: 3 }} />
              </Grid>
              <Grid
                size={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SpeakerMentorAnimation />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChoose;

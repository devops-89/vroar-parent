import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Badge from "../Components/Badge";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Home_hero_points from "../Components/Home_hero_points";

const Mentors = () => {
  const whyMentorsData = [
    {
      label: "Scheduled 1:1 mentorship sessions",
    },
    {
      label: "Matched to your child’s strengths, goals, and interests",
    },
    {
      label: "A gamified mentorship journey with real progress tracking",
    },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Badge label="Mentors" width={100} margin="auto" />
        <Grid container>
          <Grid size={9} margin={"auto"} mt={3}>
            <Typography
              sx={{
                fontSize: 64,
                fontWeight: 800,
                fontFamily: nunito.style,
                textAlign: "center",
              }}
            >
              A Personal Advisory Board for your child
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: COLORS.TEXT_COLOR,
                fontSize: 20,
                fontFamily: nunito.style,
              }}
            >
              We don’t just assign mentors, we curate a personal circle of top
              college achievers and professionals who guide your child, one step
              at a time.
            </Typography>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              {whyMentorsData.map((val, i) => (
                <Home_hero_points
                  label={val.label}
                  key={i}
                  color={COLORS.TEXT_COLOR}
                  justifyContent={"center"}
                  mt={2}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentors;

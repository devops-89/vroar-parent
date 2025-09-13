import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Badge from "../Components/Badge";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Home_hero_points from "../Components/Home_hero_points";
import MentorContainer from "./MentorContainer";

const Mentors = () => {
  const whyMentorsData = [
    {
      label: "1:1 Sessions That Stick",
    },
    {
      label: "Strengths-Based Matching",
    },
    {
      label: "Progress Made Fun",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Badge label="Mentors" width={100} margin="auto" />
        <Grid container>
          <Grid size={{ lg: 9, xs: 12 }} margin={"auto"} mt={3}>
            <Typography
              sx={{
                fontSize: { lg: 64, xs: 25 },
                fontWeight: 700,
                fontFamily: "gomenasans-bold",
                textAlign: "center",
                lineHeight: "1.1",
                letterSpacing: "-.04em",
              }}
              data-aos="fade-up"
            >
              A Personal Advisory Board for your child
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: COLORS.TEXT_COLOR,
                fontSize: 20,
                fontFamily: nunito.style,
                mt: 1,
              }}
              data-aos="fade-up"
            >
              Not just a mentor but your child gets a curated circle of
              achievers and experts who guide them with purpose.
            </Typography>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              {whyMentorsData.map((val, i) => (
                <Box
                  key={i}
                  data-aos={"fade-left"}
                  data-aos-delay={`${i + 1 * 100}`}
                >
                  <Home_hero_points
                    label={val.label}
                    key={i}
                    color={COLORS.TEXT_COLOR}
                    justifyContent={"center"}
                    mt={2}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }} data-aos="fade-left">
          <MentorContainer index={index} />
        </Box>
      </Container>
    </Box>
  );
};

export default Mentors;

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
          <Grid size={9} margin={"auto"} mt={3}>
            <Typography
              sx={{
                fontSize: 64,
                fontWeight: 700,
                fontFamily: "gomenasans,arial,sans-serif",
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
              Not just a mentor but your child gets a curated circle of
              achievers and experts who guide them with purpose.
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

        <Box sx={{ mt: 6 }}>
          <MentorContainer index={index} />
        </Box>
      </Container>
    </Box>
  );
};

export default Mentors;

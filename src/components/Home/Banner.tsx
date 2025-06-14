import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import bannerImage from "@/homePage/hero-section-baner.avif";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Home_hero_points from "./Components/Home_hero_points";
const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Typography
              sx={{
                fontSize: 68,
                fontFamily: nunito.style,
                fontWeight: 700,
                color: COLORS.BLACK,
                textAlign: "center",
              }}
            >
              Unlock Your
            </Typography>
            <Typography
              sx={{
                backgroundImage: COLORS.LINEAR_GRADIENT,
                backgroundClip: "text",
                color: COLORS.TRANSPARENT,
                fontSize: 68,
                fontFamily: nunito.style,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Child's Superpowers
            </Typography>
            <Typography
              sx={{
                fontFamily: nunito.style,
                color: COLORS.BLACK,
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Blending neuroscience, psychology & AI delivered through gamified
              coaching that builds unshakable confidence for the AI-powered
              world ahead. Your child gets a dedicated circle of support.
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2} justifyContent={"center"} mt={2}>
              <Home_hero_points label="Coaches" />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: COLORS.PRIMARY, width: "2px" }}
              />
              <Home_hero_points label="Counselors" />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: COLORS.PRIMARY, width: "2px" }}
              />
              <Home_hero_points label="Mentors" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

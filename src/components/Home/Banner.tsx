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
import chooseBanner from "@/homePage/why-choose-section.avif";
import CurvedBadge from "./Components/ChooseIcon";
import img1 from "@/homePage/choose-icon1.avif";
import img2 from "@/homePage/choose-icon2.avif";
import img3 from "@/homePage/choose-icon3.avif";
import img4 from "@/homePage/choose-icon4.avif";
import Image from "next/image";
import frame from "@/homePage/Choose-frame.avif";
import ButtonWithIcon from "./Components/ButtonWithIcon";
const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 10,
      }}
    >
      <Container sx={{ mt: 20 }}>
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
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
              mt={2}
            >
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
            <Box sx={{ mt: 25, position: "relative" }}>
              <Box
                sx={{
                  backgroundImage: `url(${chooseBanner.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "40vh",
                  marginTop: 10,
                  borderRadius: "3.125rem",
                  position: "relative",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{ position: "absolute", top: 20, width: "100%", px: 4 }}
                >
                  <CurvedBadge icon={img1} />
                  <CurvedBadge icon={img2} />
                </Stack>
                <Box
                  sx={{
                    position: "absolute",
                    top: -145,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Image src={frame} alt="frame" width={400} height={400} />
                </Box>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  sx={{ position: "absolute", bottom: 20, width: "100%" }}
                >
                  <CurvedBadge icon={img3} />
                  <CurvedBadge icon={img4} />
                </Stack>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: -30,
                  zIndex: 999,
                }}
              >
                <ButtonWithIcon label="Get Started Today" width="250px" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

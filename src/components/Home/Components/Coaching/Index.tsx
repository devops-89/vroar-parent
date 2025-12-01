import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import coachingBanner from "@/homePage/coaching/coaching.webp";
import Image from "next/image";
import grass from "@/homePage/coaching/grass.png";
import cactus from "@/homePage/coaching/green_cactus.png";
import Badge from "../Badge";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import CoachingCard from "./CoachingCard";
import { COACHING_DATA } from "@/assets/mentors";
const Coaching = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundImage: `url(${coachingBanner.src})`,
        width: "100%",
        height: { lg: "200vh", xs: "150vh" },
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        mt: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: { lg: -80, xs: -50 },
          left: { lg: 30, xs: 0 },
        }}
      >
        <Image src={grass} alt="" width={phone ? 100 : 400} />
      </Box>
      <Box sx={{ position: "absolute", right: 0, bottom: -25 }}>
        <Image src={cactus} alt="" width={phone ? 100 : 400} />
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mt: 8 }}>
          <Badge label="coaching" margin="auto" width={100} />
          <Typography
            sx={{
              fontSize: { lg: 64, xs: 30 },
              fontFamily: "gomenasans-bold",
              mt: 3,
              fontWeight: 700,
              // letterSpacing: 2,
              textAlign: "center",
            }}
          >
            Strength Coaching That Builds
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: 64, xs: 30 },
              fontFamily: "gomenasans-bold",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Self-Awareness
          </Typography>
          <Typography
            sx={{
              width: { lg: 600, xs: "100%" },
              margin: "auto",
              textAlign: "center",
              fontSize: 20,
              fontFamily: nunito.style,
              color: COLORS.TEXT_COLOR,
              mt: 2,
              lineHeight: 1.4,
            }}
          >
            Knowing your strengths is powerful. Learning how to apply them to
            life’s biggest decisions? That’s transformative. Our certified
            coaches help your child turn raw potential into purposeful
            direction.
          </Typography>
          <Grid container sx={{ mt: 4 }}>
            <Grid size={{ lg: 6, xs: 11 }} margin={"auto"}>
              <Grid container spacing={2}>
                {COACHING_DATA.map((val, i) => (
                  <Grid size={12} key={i}>
                    <CoachingCard
                      img={val.img}
                      description={val.description}
                      heading={val.heading}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Coaching;

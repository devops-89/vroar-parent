import { Box, Grid, Stack, Typography } from "@mui/material";
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
  return (
    <Box
      sx={{
        backgroundImage: `url(${coachingBanner.src})`,
        width: "100%",
        height: "200vh",
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        mt: 10,
      }}
    >
      <Box sx={{ position: "absolute", bottom: -100, left: 30 }}>
        <Image src={grass} alt="" width={400} />
      </Box>
      <Box sx={{ position: "absolute", right: 0, bottom: -25 }}>
        <Image src={cactus} alt="" width={400} />
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
              fontSize: 64,
              fontFamily: "gomenasans,arial,sans-serif",
              mt: 3,
              fontWeight: 700,
              // letterSpacing: 2,
              textAlign: "center",
            }}
          >
            Strength Coaching
          </Typography>
          <Typography
            sx={{
              width: 600,
              margin: "auto",
              textAlign: "center",
              fontSize: 20,
              fontFamily: nunito.style,
              color: COLORS.TEXT_COLOR,
              mt: 2,
              lineHeight: 1.4,
            }}
          >
            We don’t just reveal your child’s strengths, we show them how to use
            them with purpose.
          </Typography>
          <Grid container sx={{ mt: 4 }}>
            <Grid size={6} margin={"auto"}>
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

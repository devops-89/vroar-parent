import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import trekshipBanner from "@/homePage/trekship_banner.webp";
import Badge from "../Components/Badge";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import TrekshipCard from "./TrekshipCard";
import { data } from "@/assets/data";
const Trekship = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${trekshipBanner.src})`,
        width: "100%",
        height: { lg: "150vh", xs: "100%" },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "start",
        mt: 10,
      }}
    >
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          <Grid size={{ lg: 9, xs: 12 }} margin="auto">
            <Badge label="MYTREKSHIP" width={100} margin="auto" />
            <Typography
              sx={{
                mt: 2,
                color: COLORS.WHITE,
                fontSize: { lg: 64, xs: 25 },
                fontFamily: "gomenasans-bold",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.1,
              }}
              data-aos="fade-up"
            >
              Your Child’s First Step Into the Real World
            </Typography>
            <Box sx={{ mt: { lg: 4, xs: 2 } }}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontSize: { lg: 20, xs: 16 },
                  fontFamily: nunito.style,
                  fontWeight: 500,
                  textAlign: "center",
                  width: { lg: 800, xs: "100%" },
                  margin: "auto",
                }}
                data-aos="fade-up"
              >
                No waiting games. With MyTrekShip, your child steps into a real
                3-week internship working on live projects with real companies.
              </Typography>
            </Box>
          </Grid>
          {data.trekshipData.map((val, i) => (
            <Grid
              size={{ lg: 4, xs: 12 }}
              key={i}
              data-aos="fade-right"
              data-aos-duration={`${i + 1 * 100}`}
            >
              <TrekshipCard
                img={val.img}
                title1={val.title1}
                title2={val.title2}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Trekship;

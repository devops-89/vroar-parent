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
        height: "150vh",
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
          <Grid size={10} margin="auto">
            <Badge label="MYTREKSHIP" width={100} margin="auto" />
            <Typography
              sx={{
                mt: 2,
                color: COLORS.WHITE,
                fontSize: 64,
                fontFamily: nunito.style,
                fontWeight: 800,
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              Your Child’s First Step Into the Real World
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontSize: 20,
                  fontFamily: nunito.style,
                  fontWeight: 500,
                  textAlign: "center",
                  width: 800,
                  margin: "auto",
                }}
              >
                No waiting games. With MyTrekShip, your child steps into a real
                3-week internship working on live projects with real companies.
              </Typography>
            </Box>
          </Grid>
          {data.trekshipData.map((val, i) => (
            <Grid size={4}>
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

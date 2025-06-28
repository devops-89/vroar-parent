import React from "react";
import banner from "@/homePage/testimonial_banner.webp";
import { Box, Container, Grid, Typography } from "@mui/material";
import Badge from "../Components/Badge";
import { nunito } from "@/utils/fonts";
const TestimonialSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        mt: 10,
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 40,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Counseling" width={100} margin="auto" />
            <Typography
              sx={{
                fontSize: 64,
                fontFamily: "gomenasans,arial,sans-serif",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              What Our Reviews Say
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: nunito.style,
                fontSize: 20,
                width: 700,
                margin: "auto",
                textAlign: "center",
              }}
            >
              Discover how MyTreks has transformed journeys through the voices
              of students, parents, and mentors.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

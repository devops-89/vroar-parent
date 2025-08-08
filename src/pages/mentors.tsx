import { Box, Container, Grid } from "@mui/material";
import React from "react";
import backgroundBanner from "@/banner/mentors/mentor_banner.jpg";
const Mentors = () => {
  return (
    <Box
      sx={{
        abckgroundColor: `url(${backgroundBanner.src})`,
        height: "100%",
        backroundSize: "cover",
        backgroundPosition: "50%",
      }}
    >
        <Container>
            <Grid container></Grid>
        </Container>
    </Box>
  );
};

export default Mentors;

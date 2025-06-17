import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Badge from "./Components/Badge";
import { nunito } from "@/utils/fonts";
import Image from "next/image";
import aboutus from "@/homePage/about_icon.png";
import IntroVideo from "./Components/IntroVideo";
const AboutSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#fff5ea,#ffeccc)",
        px: "40px",
        py: 10,
      }}
    >
      <Container>
        <Badge label="About Us" width={100} />
        <Grid container alignItems={"center"} sx={{ mt: 2 }}>
          <Grid size={8}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography
                sx={{
                  fontFamily: nunito.style,
                  fontSize: 64,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Shaping
              </Typography>
              <Image src={aboutus} alt="aboutus" width={80} height={80} />
              <Typography
                sx={{
                  fontFamily: nunito.style,
                  fontSize: 64,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                the
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: nunito.style,
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1,
                mt: 2,
              }}
            >
              Future of Immersion
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography
              sx={{
                fontFamily: nunito.style,
                fontSize: 24,
                fontWeight: 400,
                lineHeight: "33.6px",
              }}
            >
              We fuse innovation with immersive storytelling, crafting inspiring
              gaming experiences.
            </Typography>
          </Grid>
          <Grid size={9} margin={"auto"} sx={{ mt: 10 }}>
            <IntroVideo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

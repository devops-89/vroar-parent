import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Badge from "./Components/Badge";
import { nunito } from "@/utils/fonts";
import Image from "next/image";
import aboutus from "@/homePage/about_icon.png";
const AboutSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#fff5ea,#ffeccc)",
        px: "40px",
        py: 20,
      }}
    >
      <Container>
        <Badge label="About Us" />
        <Grid container>
          <Grid size={7}>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

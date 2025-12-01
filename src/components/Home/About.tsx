import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Badge from "./Components/Badge";
import { nunito } from "@/utils/fonts";
import Image from "next/image";
import aboutus from "@/homePage/about_icon.png";
import IntroVideo from "./Components/IntroVideo";
const AboutSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        background: "linear-gradient(#fff5ea,#ffeccc)",
        px: "40px",
        py: { lg: 10, xs: 7 },
      }}
    >
      <Container>
        <Badge
          label="About Us"
          width={100}
          sx={{ margin: { lg: 0, xs: "auto", mb: 2 } }}
        />
        <Grid container alignItems={"center"} sx={{ mt: 2 }}>
          <Grid size={{ lg: 8, xs: 12 }} sx={{ mb: 3 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={{ lg: "flex-start", xs: "center" }}
              spacing={2}
            >
              <Typography
                sx={{
                  fontFamily: "gomenasans-bold",
                  fontSize: { lg: 64, xs: 25 },
                  fontWeight: 700,
                  lineHeight: { lg: 1, xs: "14px" },
                }}
                data-aos="fade-up"
              >
                Shaping
              </Typography>
              {!phone && (
                <Image
                  src={aboutus}
                  alt="aboutus"
                  width={80}
                  height={80}
                  data-aos="fade-up"
                />
              )}
              <Typography
                sx={{
                  fontFamily: "gomenasans-bold",
                  fontSize: { lg: 64, xs: 25 },
                  fontWeight: 700,
                  lineHeight: { lg: 1, xs: "14px" },
                }}
                data-aos="fade-up"
              >
                the
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 64, xs: 25 },
                fontWeight: 700,
                lineHeight: { lg: 1, xs: "14px" },
                mt: 2,
              }}
              data-aos="fade-up"
            >
              Future of Immersion
            </Typography>
          </Grid>
          <Grid size={{ lg: 4, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: nunito.style,
                fontSize: { lg: 24, xs: 14 },
                fontWeight: 400,
                lineHeight: { lg: "33.6px", xs: "14px" },
                textAlign: { lg: "start", xs: "center" },
                mt: { lg: 2, xs: 0 },
              }}
              data-aos="fade-up"
            >
              We fuse innovation with immersive storytelling, crafting inspiring
              gaming experiences.
            </Typography>
          </Grid>
          <Grid
            size={{ lg: 9, xs: 12 }}
            margin={"auto"}
            sx={{ mt: { lg: 10, xs: 4 } }}
          >
            <IntroVideo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

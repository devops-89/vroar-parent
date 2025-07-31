import React from "react";
import banner from "@/banner/parents/parents-hero.avif";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import Parentsprogram from "@/components/Parents/parents-Program";
import Workshop from "@/components/Parents/workshop/Index";
const Parents = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: "100%",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgrooundRepeat: "no-repeat",
          pt: 20,
          pb: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ mt: 20 }}>
          <Grid container>
            <Grid size={10} margin={"auto"}>
              <Typography
                sx={{
                  fontSize: 68,
                  fontFamily: "gomenasans,Arial,sans-serif",
                  fontWeight: 700,
                  color: COLORS.BLACK,
                  textAlign: "center",
                  marginBottom: -1,
                  lineHeight: 1.1,
                }}
              >
                Discover What Makes
              </Typography>
              <Typography
                sx={{
                  backgroundImage: COLORS.TEXT_GRADIENT,
                  backgroundClip: "text",
                  color: COLORS.TRANSPARENT,
                  fontSize: 68,
                  fontFamily: "gomenasans,Arial,sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Your Child Shine
              </Typography>
              <Typography
                sx={{
                  fontFamily: nunito.style,
                  color: COLORS.BLACK,
                  textAlign: "center",
                  fontSize: 20,
                  mt: 3,
                }}
              >
                Backed by neuroscience, powered by coaching, and built for
                parents who want clarity for their child.
              </Typography>
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <ButtonWithIcon label="Book a Demo" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ pt: 10 }}>
        <Parentsprogram />
      </Box>
      <Box sx={{ pt: 10 }}>
        <Workshop />
      </Box>
    </Box>
  );
};

export default Parents;

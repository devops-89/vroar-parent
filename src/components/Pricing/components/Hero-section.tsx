import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bg_image from "@/pricing/web_view.avif";
import Badge from "@/components/Home/Components/Badge";
import HeadingField from "@/components/common/Heading-Field";
import GradientText from "@/components/common/Greadient-text";
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg_image.src})`,
        height: "100vh",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        py: 20,
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={8} margin={"auto"}>
            <Badge label="Pricing" margin="auto" width={100} />
            <HeadingField
              label="Plans that will help"
              sx={{
                fontFamily: "gomenasans-bold",
                lineHeight: 1.4,
                letterSpacing: "-.04rem",
              }}
            />
            <GradientText
              label="your child's future!"
              sx={{ fontFamily: "gomenasans-bold", lineHeight: 1.1 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

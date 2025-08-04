import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import banner from "@/banner/parents/why_mytreks/join_mytreks.jpg";
import Badge from "@/components/Home/Components/Badge";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import WhyMyTreksCard from "./Why_mytreks_Card";
import AppIconAnimation from "./App-icon_animation";
const WhyMyTreks = () => {
  const whymytreks = [
    {
      label: "Proven to build confidence and clarity",
    },
    {
      label: "Personalized for your child",
    },
    {
      label: "Transparent for you",
    },
    {
      label: "Science-backed",
    },
    {
      label: "Expert-led",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        height: "100%",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        borderRadius: "50px",
        paddingTop: "50px",
        paddingBottom: "190px",
      }}
    >
      <Badge label="Why Mytreks" width={130} margin="auto" />
      <HeadingField
        label="Why Parents Choose Us?"
        color={COLORS.WHITE}
        textAlign="center"
      />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid container>
          <Grid size={9} margin={"auto"}>
            <Grid container spacing={4}>
              <Grid size={6}>
                <Stack alignItems={"flex-start"} spacing={2}>
                  {whymytreks.map((val, i) => (
                    <WhyMyTreksCard label={val.label} key={i} />
                  ))}
                </Stack>
              </Grid>
              <Grid size={6}>
                <AppIconAnimation />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyMyTreks;

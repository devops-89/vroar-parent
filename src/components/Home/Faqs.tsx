import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/faq.avif";
import faq1 from "@/banner/faq1.avif";
import faq2 from "@/banner/faq2.avif";
import Image from "next/image";
import Badge from "./Components/Badge";
import FaqCard from "./Components/Faq-card";
const FaqSection = () => {
  return (
    <Box sx={{ position: "relative", pt: 10 }}>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          minHeight: "120vh",
          backgroundPosition: "50% 100%",
          backgroundSize: "cover",
          pb:10
        }}
      >
        <Container>
          <Grid container>
            <Grid size={8} margin={"auto"}>
              <Badge label="FAQS" width={100} margin="auto" />
              <Typography
                sx={{
                  fontSize: 64,
                  fontFamily: "gomenasana,sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                  textTransform: "capitalize",
                  lineHeight: "-2.56px",
                }}
              >
                frequently asked questions
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: "gomenasana,sans-serif",
                  fontWeight: 500,
                  textAlign: "center",
                  textTransform: "capitalize",
                  lineHeight: 1.4,
                }}
              >
                Find answers to common queries about MyTreks, from features to
                mentorship benefits and everything in between
              </Typography>

              <FaqCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ position: "absolute", bottom: 40, width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={faq1} alt="" width={250} />
          <Image src={faq2} alt="" width={250} />
        </Stack>
      </Box>
    </Box>
  );
};

export default FaqSection;

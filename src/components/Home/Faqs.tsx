import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import banner from "@/banner/faq.avif";
import faq1 from "@/banner/faq1.avif";
import faq2 from "@/banner/faq2.avif";
import Image from "next/image";
import Badge from "./Components/Badge";
import FaqCard from "./Components/Faq-card";
const FaqSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ position: "relative", py: 10 }}>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          minHeight: { lg: "120vh", xs: "110vh" },
          backgroundPosition: "50% 100%",
          backgroundSize: "cover",
          py: 10,
        }}
      >
        <Container>
          <Grid container>
            <Grid size={{ lg: 8, xs: 12 }} margin={"auto"}>
              <Badge label="FAQS" width={100} margin="auto" />
              <Typography
                sx={{
                  fontSize: { lg: 64, xs: 36 },
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
                  fontSize: { lg: 20, xs: 16 },
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
          <Image src={faq1} alt="" width={phone ? 150 : 250} />
          <Image src={faq2} alt="" width={phone ? 150 : 250} />
        </Stack>
      </Box>
    </Box>
  );
};

export default FaqSection;

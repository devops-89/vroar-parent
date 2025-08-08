import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/faq.avif";
import faq1 from "@/banner/faq1.avif";
import faq2 from "@/banner/faq2.avif";
import Image from "next/image";
import Badge from "@/components/Home/Components/Badge";
import FaqCard from "./Faq-Card";
import { COLORS } from "@/utils/enum";
import { ParentFaqData } from "@/assets/faqData";
import ParaField from "@/components/common/Para-Field";
import HeadingField from "@/components/common/Heading-Field";
const ParentFaqSection = () => {
  return (
    <Box sx={{ position: "relative", pt: 10 }}>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          minHeight: "120vh",
          backgroundPosition: "50% 100%",
          backgroundSize: "cover",
          pb: 10,
        }}
      >
        <Container>
          <Grid container>
            <Grid size={9} margin={"auto"}>
              <Badge label="FAQS" width={100} margin="auto" />
              {/* <Typography
                sx={{
                  fontSize: 64,
                  fontFamily: "gomenasana,sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                  textTransform: "capitalize",
                  lineHeight: "-2.56px",
                }}
              >
                Got Questions?
              </Typography>
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
                We’re Here to Guide You
              </Typography> */}
              <HeadingField label="Got Questions?" sx={{ lineHeight: 1.2 }} />
              <HeadingField
                label="We’re Here to Guide You"
                sx={{ lineHeight: 1.2 }}
              />
              <ParaField
                label="  Parenting comes with a million questions we’ve answered the ones
                you might ask first. If it’s about your child’s growth, purpose,
                or future, we’ve got it covered."
                fontSize={20}
                sx={{
                  color: "#262626",
                  fontWeight: 550,
                  textAlign: "center",
                  mt: 2,
                }}
              />

              <FaqCard data={ParentFaqData} />
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

export default ParentFaqSection;

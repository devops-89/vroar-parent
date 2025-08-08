import React from "react";
import banner from "@/banner/parents/parents-hero.avif";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import Parentsprogram from "@/components/Parents/parents-Program";
import Workshop from "@/components/Parents/workshop/Index";
import ParentCurriculum from "@/components/Parents/curriculum/Index";
import OurMentorsParents from "@/components/Parents/Mentors";
import OurParentApp from "@/components/Parents/OurApp";
import phone_mock_banner from "@/banner/parents/why_mytreks/why_choose_section.jpg";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Image from "next/image";
import phone_mock from "@/banner/parents/phone-mock.avif";
import TestimonialSection from "@/components/Home/TestimonialBanner/Index";
import { parentTestimonial, testimonial_data } from "@/assets/testimonial";
import ParentTestimonial from "@/components/Parents/Testimonial/Parent-Testimonial";
import ParentFaqSection from "@/components/Parents/faq-section/Index";
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
      <Box sx={{ pt: 10 }}>
        <ParentCurriculum />
      </Box>
      <Box sx={{ pt: 10 }}>
        <OurMentorsParents />
      </Box>
      <Box sx={{ pt: 10 }}>
        <OurParentApp />
      </Box>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundImage: `url(${phone_mock_banner.src})`,
            border: `1px solid ${COLORS.WHITE}`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            borderRadius: "57px",
            height: "430px",
            paddingLeft: "80px",
            marginTop: "-70px",
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: 99,
          }}
        >
          <Grid container>
            <Grid size={6}>
              <HeadingField
                label="Turn Potential into Purpose Together."
                color="#28084B"
                textAlign="left"
                fontSize={60}
              />
              <ParaField
                label="Enroll with MyTreks.ai Today"
                fontSize={20}
                color="#28084B"
                sx={{ mt: 2 }}
              />
              <ButtonWithIcon label="Enroll Now" sx={{ mt: 2 }} />
            </Grid>
            <Grid size={6}>
              <Image
                src={phone_mock}
                alt=""
                style={{
                  position: "absolute",
                  inset: "auto -3% 0% auto",
                  top: -75,
                  // height: "100%",
                  width: 570,
                  height: 500,
                  maxWidth: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ mt: 8 }}>
        <ParentTestimonial testimonialData={parentTestimonial} />
      </Box>
      <Box sx={{ mt: 10 }}>
        <ParentFaqSection />
      </Box>
    </Box>
  );
};

export default Parents;

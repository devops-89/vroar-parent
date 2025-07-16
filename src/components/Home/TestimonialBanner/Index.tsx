import React, { useState, useEffect } from "react";
import banner from "@/homePage/testimonial_banner.webp";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Badge from "../Components/Badge";
import { nunito } from "@/utils/fonts";
import { ArrowBack, ArrowLeft, KeyboardArrowLeft } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { Autoplay, EffectCards } from "swiper/modules";
import { testimonial_data } from "@/assets/testimonial";
const AUTOPLAY_DELAY = 2000;

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSlides = testimonial_data.length;

  // Reset progress to 0 if it reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
    }
  }, [progress]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        mt: 10,
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 40,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Counseling" width={100} margin="auto" />
            <Typography
              sx={{
                fontSize: 64,
                fontFamily: "gomenasans,arial,sans-serif",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              What Our Reviews Say
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: nunito.style,
                fontSize: 20,
                width: 700,
                margin: "auto",
                textAlign: "center",
              }}
            >
              Discover how MyTreks has transformed journeys through the voices
              of students, parents, and mentors.
            </Typography>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <IconButton>
                <ArrowBack />
              </IconButton>
              <Swiper
                effect="cards"
                modules={[EffectCards, Autoplay]}
                className="tesimonial_swiper"
                autoplay={{
                  delay: AUTOPLAY_DELAY,
                  disableOnInteraction: false,
                }}
                loop
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                onAutoplayTimeLeft={(_, __, swiperProgress) => {
                  setProgress(swiperProgress * 100);
                }}
              >
                {testimonial_data.map((val, i) => (
                  <SwiperSlide key={i}>
                    <TestimonialCard
                      img={val.img}
                      name={val.name}
                      testimonial={val.testimonial}
                      progress={i === currentIndex ? progress : 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

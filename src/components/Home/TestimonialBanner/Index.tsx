import React, { useState, useEffect, useRef } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
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
import {
  ArrowBack,
  ArrowForward,
  ArrowLeft,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { Autoplay, EffectCards } from "swiper/modules";
import { testimonial_data } from "@/assets/testimonial";
import { COLORS } from "@/utils/enum";
const AUTOPLAY_DELAY = 2000;

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
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
        height: "120vh",
        backgroundPosition: "50% 100%",
        backgroundSize: "cover",
        mt: 10,
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 20,
        // pb: 3,
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
              <IconButton
                sx={{
                  background: "linear-gradient(#ffb7a6,#fff 35%)",
                  borderRadius: "3rem",
                  boxShadow:
                    "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff",
                  color: COLORS.PRIMARY,
                }}
              >
                <ArrowBack />
              </IconButton>
              <Box sx={{ width: 600, height: 500, mt: 3, mx: "auto" }}>
                <Swiper
                  effect="cards"
                  modules={[EffectCards, Autoplay]}
                  className="tesimonial_swiper"
                  autoplay={{
                    delay: AUTOPLAY_DELAY,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                  onAutoplayTimeLeft={(_, __, swiperProgress) => {
                    setProgress(swiperProgress * 100);
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  loop
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
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {testimonial_data.map((_, i) => (
                    <Box
                      key={i}
                      onClick={() => {
                        if (
                          swiperRef.current &&
                          typeof swiperRef.current.slideToLoop === "function"
                        ) {
                          swiperRef.current.slideToLoop(i);
                        }
                      }}
                      sx={{
                        backgroundColor:
                          i === currentIndex ? COLORS.PRIMARY : COLORS.WHITE,
                        width: i === currentIndex ? 40 : 20,
                        height: 5,
                        borderRadius: 5,
                        cursor: "pointer",
                        transition: "background 0.3s, opacity 0.3s, width 0.3s",
                      }}
                    ></Box>
                  ))}
                </Box>
              </Box>
              <IconButton
                sx={{
                  background: "linear-gradient(#ffb7a6,#fff 35%)",
                  borderRadius: "3rem",
                  boxShadow:
                    "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff",
                  color: COLORS.PRIMARY,
                }}
              >
                <ArrowForward />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

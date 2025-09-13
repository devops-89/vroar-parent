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
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { Autoplay, EffectCards } from "swiper/modules";
import { COLORS } from "@/utils/enum";
import { TESTIMONIAL_PROPS } from "@/utils/types";

const AUTOPLAY_DELAY = 3000;

interface testimonialDataProps {
  testimonialData: TESTIMONIAL_PROPS[];
}

const TestimonialSection = ({ testimonialData }: testimonialDataProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const autoplayRunning = useRef(true);

  const slides = [...testimonialData];
  if (testimonialData.length < 3) {
    slides.push(...testimonialData.slice(0, 3 - testimonialData.length));
  }

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const handleReachEnd = () => {
      if (autoplayRunning.current) {
        setTimeout(() => {
          swiper.slideTo(0, 0);
          swiper.autoplay.start();
        }, AUTOPLAY_DELAY);
      }
    };

    swiper.on("reachEnd", handleReachEnd);

    return () => {
      swiper.off("reachEnd", handleReachEnd);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        height: { lg: "120vh", xs: "100vh" },
        backgroundPosition: "50% 100%",
        backgroundSize: "cover",
        mt: 10,
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { lg: 20, xs: 5 },
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin={"auto"}>
            <Badge label="Counseling" width={100} margin="auto" />
            <Typography
              sx={{
                fontSize: { xs: 30, md: 64 },
                fontFamily: "gomenasans-bold,arial,sans-serif",
                textAlign: "center",
                fontWeight: 600,
                lineHeight: 1.2,
                mt: 3,
              }}
            >
              What Our Reviews Say
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: nunito.style,
                fontSize: { xs: 16, md: 20 },
                width: { xs: "90%", md: 700 },
                margin: "auto",
                textAlign: "center",
              }}
            >
              Discover how MyTreks has transformed journeys through the voices
              of students, parents, and mentors.
            </Typography>
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"space-between"}
                sx={{ mt: 5 }}
              >
                <IconButton
                  onClick={() => swiperRef.current?.slidePrev()}
                  sx={{
                    background: "linear-gradient(#ffb7a6,#fff 35%)",
                    borderRadius: "3rem",
                    boxShadow:
                      "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff",
                    color: COLORS.PRIMARY,
                    zIndex: 2,
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    transition: "transform 0.3s ease",
                  }}
                >
                  <ArrowBack fontSize="large" />
                </IconButton>

                <Box sx={{ width: { xs: "90%", md: 600 }, height: 500 }}>
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{
                      delay: AUTOPLAY_DELAY,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      waitForTransition: true,
                    }}
                    speed={800}
                    loop={true}
                    loopAdditionalSlides={2}
                    onSlideChange={(swiper) => {
                      setCurrentIndex(
                        swiper.realIndex % testimonialData.length
                      );
                    }}
                    onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
                      setProgress(percentage * 100);
                    }}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                  >
                    {slides.map((val, i) => (
                      <SwiperSlide key={`${i}-${val.name}`}>
                        <TestimonialCard
                          img={val.img}
                          name={val.name}
                          testimonial={val.testimonial}
                          progress={i === currentIndex ? progress : 0}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>

                <IconButton
                  onClick={() => swiperRef.current?.slideNext()}
                  sx={{
                    background: "linear-gradient(#ffb7a6,#fff 35%)",
                    borderRadius: "3rem",
                    boxShadow:
                      "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff",
                    color: COLORS.PRIMARY,
                    zIndex: 2,
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    transition: "transform 0.3s ease",
                  }}
                >
                  <ArrowForward fontSize="large" />
                </IconButton>
              </Stack>
            </Box>
            <Box sx={{ display: { lg: "none", xs: "block", margin: "auto" } }}>
              <Box
                sx={{
                  width: { xs: "90%", md: 600 },
                  height: 500,
                  mt: 5,
                  margin: "auto",
                }}
              >
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards, Autoplay]}
                  autoplay={{
                    delay: AUTOPLAY_DELAY,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    waitForTransition: true,
                  }}
                  speed={800}
                  loop={true}
                  loopAdditionalSlides={2}
                  onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex % testimonialData.length);
                  }}
                  onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
                    setProgress(percentage * 100);
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {slides.map((val, i) => (
                    <SwiperSlide key={`${i}-${val.name}`}>
                      <TestimonialCard
                        img={val.img}
                        name={val.name}
                        testimonial={val.testimonial}
                        progress={i === currentIndex ? progress : 0}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                spacing={3}
              >
                <IconButton
                  onClick={() => swiperRef.current?.slidePrev()}
                  sx={{
                    background: "linear-gradient(#ffb7a6,#fff 35%)",
                    borderRadius: "3rem",
                    boxShadow:
                      "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff",
                    color: COLORS.PRIMARY,
                    zIndex: 2,
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    transition: "transform 0.3s ease",
                  }}
                >
                  <ArrowBack fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={() => swiperRef.current?.slideNext()}
                  sx={{
                    background: "linear-gradient(#ffb7a6,#fff 35%)",
                    borderRadius: "3rem",
                    boxShadow:
                      "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff",
                    color: COLORS.PRIMARY,
                    zIndex: 2,
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    transition: "transform 0.3s ease",
                  }}
                >
                  <ArrowForward fontSize="large" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

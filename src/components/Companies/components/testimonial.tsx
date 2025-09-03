import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import testi_banner from "@/banner/parents/parent_testimonialBanner.avif";
import Badge from "@/components/Home/Components/Badge";
import star from "@/icons/testimonial_star.avif";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { TESTIMONIAL_PROPS } from "@/utils/types";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Autoplay, EffectCards } from "swiper/modules";
import TestimonialCard from "@/components/Home/TestimonialBanner/TestimonialCard";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";

interface testimonialDataProps {
  testimonialData: TESTIMONIAL_PROPS[];
}

const AUTOPLAY_DELAY = 3000;
const CompanyTestimonial = ({ testimonialData }: testimonialDataProps) => {
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
        backgroundImage: `url(${testi_banner.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        borderRadius: "0",
        position: "relative",
        marginTop: "-360px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "80px",
        zIndex: 1,
        py: 10,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Testimonials" margin="auto" width={150} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
            >
              <HeadingField
                label="What"
                color={COLORS.BLACK}
                sx={{ lineHeight: 1.1, fontFamily: "gomenasans-bold" }}
              />
              <Image src={star} alt="" width={80} />
              <HeadingField
                label="mission-driven"
                sx={{ lineHeight: 1.1, fontFamily: "gomenasans-bold" }}
              />
            </Stack>
            <HeadingField
              label="companies are saying"
              textAlign="center"
              sx={{ lineHeight: 1.1, fontFamily: "gomenasans-bold" }}
            />

            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              sx={{ mt: 15 }}
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
            <Box sx={{ textAlign: "center" }}>
              <ButtonWithIcon
                label="Contact Us"
                sx={{ textTransform: "capitalize" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyTestimonial;

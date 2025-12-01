import {
  Box,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import bg_testimonial from "@/Mentors/testimonial_banner.avif";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import Image from "next/image";
import shapeImage from "@/homePage/about_icon.png";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { TESTIMONIAL_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Autoplay, EffectCards } from "swiper/modules";
import TestimonialCard from "../about-us/TestimonialCard";
import ButtonWithIcon from "../Home/Components/ButtonWithIcon";
import { useDispatch } from "react-redux";
import { showModal } from "@/redux/reducers/Modal";
import BecomeAMentor from "@/assets/ModalCalling/website/become-a-mentor";
interface testimonialDataProps {
  testimonialData: TESTIMONIAL_PROPS[];
}
const AUTOPLAY_DELAY = 3000;
const Testimonials = ({ testimonialData }: testimonialDataProps) => {
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

  const phone = useMediaQuery("(max-width:600px)");

  const dispatch = useDispatch();

  const mentorModal = () => {
    dispatch(showModal(<BecomeAMentor />));
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Box
        sx={{
          backgroundImage: `url(${bg_testimonial.src})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          marginTop: "-.25rem",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <Container>
          <Badge label="Success Stories" width={160} margin="auto" />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            mt={{ xs: 2 }}
          >
            <HeadingField
              sx={{
                fontWeight: 700,
                lineHeight: 1,
                fontSize: { lg: 64, xs: 35 },
              }}
              label="Shape the future"
            />
            <Image
              src={shapeImage}
              alt="aboutus"
              width={phone ? 40 : 80}
              height={phone ? 40 : 80}
              data-aos="fade-right"
            />
          </Stack>
          <HeadingField
            label="by mentoring today"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              fontSize: { lg: 64, xs: 35 },
            }}
          />

          {/* desktop slider */}
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
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
          </Box>

          {/*  mobile slider  */}
          <Box sx={{ display: { lg: "none", xs: "block" }, margin: "auto" }}>
            <Box
              sx={{
                width: { xs: "90%", md: 600 },
                height: { lg: 500 },
                mt: 5,
                pb: 3,
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
              sx={{ mt: 3, mb: 3 }}
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

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <ButtonWithIcon
              label="Become a Mentor"
              width={250}
              onClick={mentorModal}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;

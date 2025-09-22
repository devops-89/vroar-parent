import { SPEAKER_PERKS_DATA } from "@/assets/mentors";
import exclamation from "@/banner/mentors/speaker_perks/exclamation_point.avif";
import mic from "@/banner/mentors/speaker_perks/mic.avif";
import speaker_banner from "@/banner/mentors/speaker_perks/speaker_perks_banner.avif";
import { COLORS } from "@/utils/enum";
import { ArrowUpward } from "@mui/icons-material";
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import IconBox from "../common/Icon-Box";
import ParaField from "../common/Para-Field";
import SpeakerPerksCard from "./Speaker-Perks-Card";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
const SpeakerPerks = () => {
  const [show, setShow] = useState<Boolean>(false);

  const phone = useMediaQuery("(max-width:600px)");
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${speaker_banner.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        display: "flex",
        alignItems: { lg: "center", xs: "flex-start" },
        justifyContent: "center",
        height: { lg: "100vh", xs: "100%" },
        position: "relative",
        // overflow: "hidden",
      }}
    >
      <Container>
        <Grid container alignItems={"center"} spacing={{ lg: 10, xs: 2 }}>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{
              position: "relative",
              height: { lg: "100vh", xs: "100%" },
              pt: 10,
            }}
          >
            <Badge label="Perks of a Speaker" width={160} />
            <Stack spacing={-4}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                sx={{ mt: 4 }}
              >
                <HeadingField
                  label="Be the Voice"
                  color={COLORS.WHITE}
                  textAlign="left"
                  sx={{ fontSize: { lg: 68, xs: 25 } }}
                />

                <Image
                  src={mic}
                  alt=""
                  width={phone ? 80 : 112}
                  height={phone ? 60 : 90}
                  style={{ marginBottom: 20 }}
                />
              </Stack>
              <HeadingField
                label="That Inspires"
                textAlign="left"
                color={COLORS.WHITE}
                sx={{ fontSize: { lg: 68, xs: 25 } }}
              />
            </Stack>
            <ParaField
              label="Our monthly webinars bring valuable insights directly to students and parents. As a featured speaker, you'll:"
              color={COLORS.WHITE}
              sx={{ fontSize: { lg: 20, xs: 16 } }}
            />
            <Box
              sx={{
                background: "linear-gradient(#371d00,#0f0f0f)",
                borderTop: `2px solid ${COLORS.orangeBorderColor}`,
                borderLeft: `2px solid ${COLORS.orangeBorderColor}`,
                borderRight: `2px solid ${COLORS.orangeBorderColor}`,
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                padding: "16px",
                display: { lg: "flex", xs: "none" },
                justifyContent: "space-between",
                alignItems: "center",

                width: "100%",
                position: "absolute",
                bottom: 60,
                transform: show ? "translateY(0)" : "translateY(100%)",
                transition: "0.5s ease all",
              }}
            >
              <ParaField
                label="College students make excellent speakers! Share your recent experiences with college selection, major exploration, campus life, or internship opportunities"
                fontSize={20}
                color={COLORS.WHITE}
              />
            </Box>
            <Box
              sx={{
                background: "linear-gradient(#371d00,#0f0f0f)",
                borderTop: show
                  ? "none"
                  : `2px solid ${COLORS.orangeBorderColor}`,
                borderLeft: `2px solid ${COLORS.orangeBorderColor}`,
                borderRight: `2px solid ${COLORS.orangeBorderColor}`,
                borderTopLeftRadius: show ? 0 : "16px",
                borderTopRightRadius: show ? 0 : "16px",
                padding: "16px",

                position: "absolute",
                bottom: 0,
                width: "100%",
                cursor: "pointer",
                transition: "0.5s ease all",
                display: { lg: "flex", xs: "none" },
              }}
              onClick={showHandler}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Image src={exclamation} alt="" width={40} />
                  <ParaField
                    label={"Who are excellent speakers?"}
                    color={COLORS.WHITE}
                    fontSize={20}
                  />
                </Stack>
                <IconBox
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowUpward
                    sx={{
                      color: COLORS.PRIMARY,
                      fontSize: 18,
                      transform: show ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.5s ease all",
                    }}
                  />
                </IconBox>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{ position: "relative", height: "100%" }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: { lg: "650px", xs: "100%" },
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Swiper
                  direction={phone ? "horizontal" : "vertical"}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },

                    1366: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  loop={true}
                  speed={800}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  style={{ height: "100%" }}
                  grabCursor={true}
                >
                  {SPEAKER_PERKS_DATA.map((val, i) => (
                    <SwiperSlide key={i}>
                      <SpeakerPerksCard
                        img={val.img}
                        heading={val.heading}
                        description={val.description}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "40px",
                  background: "linear-gradient(#e63e00,#d1380200)",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  zIndex: 2,
                  pointerEvents: "none",
                  display: { lg: "block", xs: "none" },
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40px",
                  background: "linear-gradient(#d1380200,#a42c01)",

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  zIndex: 2,
                  pointerEvents: "none",
                  display: { lg: "block", xs: "none" },
                }}
              />
            </Box>
            <Box
              sx={{
                background: "linear-gradient(#371d00,#0f0f0f)",
                borderTop: `2px solid ${COLORS.orangeBorderColor}`,
                borderLeft: `2px solid ${COLORS.orangeBorderColor}`,
                borderRight: `2px solid ${COLORS.orangeBorderColor}`,
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                padding: "16px",
                display: { lg: "none", xs: "none" },
                justifyContent: "space-between",
                alignItems: "center",

                width: "100%",
                position: "absolute",
                bottom: 60,
                transform: show ? "translateY(0)" : "translateY(100%)",
                transition: "0.5s ease all",
              }}
            >
              <ParaField
                label="College students make excellent speakers! Share your recent experiences with college selection, major exploration, campus life, or internship opportunities"
                fontSize={20}
                color={COLORS.WHITE}
              />
            </Box>
            {/* <Box
              sx={{
                background: "linear-gradient(#371d00,#0f0f0f)",
                borderTop: show
                  ? "none"
                  : `2px solid ${COLORS.orangeBorderColor}`,
                borderLeft: `2px solid ${COLORS.orangeBorderColor}`,
                borderRight: `2px solid ${COLORS.orangeBorderColor}`,
                borderTopLeftRadius: show ? 0 : "16px",
                borderTopRightRadius: show ? 0 : "16px",
                padding: "16px",
                position: "absolute",
                
                width: "100%",
                cursor: "pointer",
                transition: "0.5s ease all",
                display: { lg: "none", xs: "none" },
                mt: "auto",
              }}
              onClick={showHandler}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Image src={exclamation} alt="" width={40} />
                  <ParaField
                    label={"Who are excellent speakers?"}
                    color={COLORS.WHITE}
                    fontSize={20}
                  />
                </Stack>
                <IconBox
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowUpward
                    sx={{
                      color: COLORS.PRIMARY,
                      fontSize: 18,
                      transform: show ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.5s ease all",
                    }}
                  />
                </IconBox>
              </Box>
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SpeakerPerks;

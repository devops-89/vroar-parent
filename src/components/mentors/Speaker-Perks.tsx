import { Box, Container, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import speaker_banner from "@/banner/mentors/speaker_perks/speaker_perks_banner.avif";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import { COLORS } from "@/utils/enum";
import mic from "@/banner/mentors/speaker_perks/mic.avif";
import Image from "next/image";
import ParaField from "../common/Para-Field";
import exclamation from "@/banner/mentors/speaker_perks/exclamation_point.avif";
import IconBox from "../common/Icon-Box";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import SpeakerPerksCard from "./Speaker-Perks-Card";
const SpeakerPerks = () => {
  const [show, setShow] = useState<Boolean>(false);

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
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Grid container alignItems={"center"}>
          <Grid size={6} sx={{ position: "relative", height: "100vh" }}>
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
                />

                <Image
                  src={mic}
                  alt=""
                  width={112}
                  height={90}
                  style={{ marginBottom: 20 }}
                />
              </Stack>
              <HeadingField
                label="That Inspires"
                textAlign="left"
                color={COLORS.WHITE}
              />
            </Stack>
            <ParaField
              label="Our monthly webinars bring valuable insights directly to students and parents. As a featured speaker, you'll:"
              color={COLORS.WHITE}
              fontSize={20}
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
                display: "flex",
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
          <Grid size={6}>
            <Swiper>
              <SwiperSlide>
                <SpeakerPerksCard />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SpeakerPerks;

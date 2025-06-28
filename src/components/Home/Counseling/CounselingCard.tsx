import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import tick from "@/icons/tick.png";
import { nunito } from "@/utils/fonts";
import counseling1 from "@/homePage/Counseling/counseling1.png";
import { COUNSELING_SLIDER } from "@/utils/types";
import { COLORS } from "@/utils/enum";
const CounselingCard = ({ data }: COUNSELING_SLIDER) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f6f6f6",
          borderRadius: "2.5rem",
          padding: "40px",
        }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          grabCursor
        >
          {data.map((val, i) => (
            <SwiperSlide key={i}>
              <Grid container>
                <Grid size={6}>
                  <Image src={tick} alt="" width={64} height={64} />
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      sx={{
                        fontSize: 36,
                        fontFamily: "gomenasans, arial,sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {val.heading1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 36,
                        fontFamily: "gomenasans, arial,sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {val.heading2}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 18, fontFamily: nunito.style, mt: 3 }}
                    >
                      {val.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={6}>
                  <Image
                    src={val.img}
                    alt=""
                    width={400}
                    style={{
                      borderRadius: "24px",
                      border: "5px solid #ffffff",
                      boxShadow: "-4.8px -4.8px 0 -4.8px #0000000d",
                    }}
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ mt: 4 }}
      >
        {data.map((_, index) => (
          <Box
            sx={{
              backgroundColor:
                activeIndex === index ? COLORS.PRIMARY : "#dcdcdc",
              borderRadius: "32px",
              width: "32px",
              height: "4px",
              cursor: "pointer",
            }}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          ></Box>
        ))}
      </Stack>
    </>
  );
};

export default CounselingCard;

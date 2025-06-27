import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tick from "@/icons/tick.png";
import { nunito } from "@/utils/fonts";
import counseling1 from "@/homePage/Counseling/counseling1.png";
import { COUNSELING_SLIDER } from "@/utils/types";
const CounselingCard = ({ data }: COUNSELING_SLIDER) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        borderRadius: "2.5rem",
        padding: "40px",
      }}
    >
      <Swiper>
        {data.map((val, i) => (
          <SwiperSlide>
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
  );
};

export default CounselingCard;

import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LeaderShipCard from "./Leadership-card";
// import leadershipIcon from '@/homePage/'
const ProgramSlider = () => {
  return (
    <Box>
      <Swiper>
        <SwiperSlide>
          {/* <LeaderShipCard
            icon={leadershipicon}
            backgroundImage={leadershipBanner.src}
            heading="Leadership Coaching"
            description="1:1 coaching from leadership coaches"
          /> */}
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProgramSlider;

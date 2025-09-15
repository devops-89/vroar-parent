import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileProgramCard from "./mobile-program-card";
import { Mobile_program_card } from "@/assets/Counseling";
const ProgramSlider = () => {
  return (
    <Box>
      <Swiper centeredSlides={true}>
        {Mobile_program_card.map((val, i) => (
          <SwiperSlide>
            <MobileProgramCard
              img={val.img}
              heading={val.heading}
              description={val.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProgramSlider;

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileProgramCard from "../../common/mobile-program-card";
import { Mobile_program_card } from "@/assets/Counseling";
import { Autoplay } from "swiper/modules";
const ProgramSlider = () => {
  return (
    <Box>
      <Swiper
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
      >
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

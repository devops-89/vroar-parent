import numberOne from "@/banner/parents/mentor/card-1.avif";
import numberTwo from "@/banner/parents/mentor/card2.avif";
import numberThree from "@/banner/parents/mentor/card3.avif";
import mentorparentbg from "@/banner/parents/mentor/mentor-card-bg.avif";
import mic from "@/banner/parents/mentor/mic.avif";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import MentornumberCard from "./Mentor-Number-Card";
const ParentMentorCard = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ position: "relative", mt: 10 }}>
      <Image
        src={mentorparentbg}
        alt=""
        width={phone ? 350 : 270}
        style={{ borderRadius: "24px", height: "100%" }}
      />
      <MentornumberCard
        label="4 flexible sessions per year online and stress-free"
        img={numberOne}
        top={-50}
        sx={{ right: { lg: -50, xs: 0 } }}
      />
      <MentornumberCard
        img={numberTwo}
        label="Tailored to your child’s goals"
        top={"40%"}
        // left={-100}
        sx={{ left: { lg: -100, xs: 0 } }}
      />
      <Box
        sx={{ position: "absolute", top: "35%", right: { lg: 100, xs: -5 } }}
      >
        <Image src={mic} alt="" width={phone ? 80 : 200} />
      </Box>
      <MentornumberCard
        img={numberThree}
        label="No guesswork: We handle the scheduling"
        bottom={0}
        sx={{ right: { lg: -50, xs: 0 } }}
      />
    </Box>
  );
};

export default ParentMentorCard;

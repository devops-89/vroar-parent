import numberOne from "@/banner/parents/mentor/card-1.avif";
import numberTwo from "@/banner/parents/mentor/card2.avif";
import numberThree from "@/banner/parents/mentor/card3.avif";
import mentorparentbg from "@/banner/parents/mentor/mentor-card-bg.avif";
import mic from "@/banner/parents/mentor/mic.avif";
import { Box } from "@mui/material";
import Image from "next/image";
import MentornumberCard from "./Mentor-Number-Card";
const ParentMentorCard = () => {
  return (
    <Box sx={{ position: "relative", mt: 10 }}>
      <Image
        src={mentorparentbg}
        alt=""
        width={270}
        style={{ borderRadius: "24px", height: "100%" }}
      />
      <MentornumberCard
        label="4 flexible sessions per year online and stress-free"
        img={numberOne}
        top={-50}
        right={-50}
      />
      <MentornumberCard
        img={numberTwo}
        label="Tailored to your child’s goals"
        top={"40%"}
        left={-100}
      />
      <Box sx={{ position: "absolute", top: "35%", left: "58%" }}>
        <Image src={mic} alt="" width={200} />
      </Box>
      <MentornumberCard
        img={numberThree}
        label="No guesswork: We handle the scheduling"
        bottom={0}
        right={-50}
      />
    </Box>
  );
};

export default ParentMentorCard;

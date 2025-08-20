import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import appIcon from "@/Mentors/speaker_mentor.avif";

const SpeakerMentorAnimation = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 350,
        height: 350,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <DotLottieReact
          src="/images/mentor_speaker.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default SpeakerMentorAnimation;

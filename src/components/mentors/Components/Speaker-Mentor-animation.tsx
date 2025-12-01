import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Box } from "@mui/material";

const SpeakerMentorAnimation = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { lg: 350, xs: 300 },
        height: { lg: 350,xs:300 },
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

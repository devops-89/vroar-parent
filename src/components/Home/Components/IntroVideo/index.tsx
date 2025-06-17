import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import PlayArrowButton from "./PlayArrow";
import choose from "@/homePage/why-choose-section.avif";

const IntroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    try {
      if (videoRef.current) {
        // Set the current time to 0 to ensure it starts from the beginning
        videoRef.current.currentTime = 0;

        // Try to play the video
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error("Error playing video:", error);
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        "& video": {
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        },
      }}
    >
      <video
        ref={videoRef}
        poster={choose.src}
        style={{ borderRadius: 20 }}
        onEnded={handleVideoEnd}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
        controls={isPlaying}
      >
        <source
          src="https://dev-mytreks.s3.us-east-1.amazonaws.com/Videos/9o70QC.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={handlePlay}
        >
          <PlayArrowButton />
        </Box>
      )}
    </Box>
  );
};

export default IntroVideo;

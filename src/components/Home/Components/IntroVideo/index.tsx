import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import PlayArrowButton, { PauseButton } from "./PlayArrow";
import choose from "@/homePage/video_thumbnail2.png";
import ButtonWithIcon from "../ButtonWithIcon";

const IntroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

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
          setHasStarted(true);
        }
      }
    } catch (error) {
      console.error("Error playing video:", error);
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowOverlay(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
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
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <video
          ref={videoRef}
          poster={choose.src}
          style={{ borderRadius: 20 }}
          onEnded={handleVideoEnd}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          playsInline
          controls={false}
        >
          <source
            src="https://dev-mytreks.s3.us-east-1.amazonaws.com/Videos/9o70QC.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay logic */}
        {((!hasStarted && !isPlaying) || (!isPlaying && showOverlay)) && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              cursor: "pointer",
            }}
            onClick={handlePlay}
          >
            <PlayArrowButton />
          </Box>
        )}
        {isPlaying && showOverlay && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              cursor: "pointer",
            }}
            onClick={handlePause}
          >
            <PauseButton />
          </Box>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
        <ButtonWithIcon label="About Us"  />
      </Box>
    </>
  );
};

export default IntroVideo;

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Box } from "@mui/material";
import appIcon from "@/icons/MyTreks _ App Icon.svg";
import Image from "next/image";

const AppIconAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/images/animation.json");

        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`);
        }

        const data = await response.json();

        // Validate that the animation data has the required structure
        if (!data || typeof data !== "object" || !data.layers) {
          throw new Error("Invalid animation data structure");
        }

        setAnimationData(data);
      } catch (err: any) {
        console.error("Error loading animation:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0 }}>
          <Image src={appIcon} alt="App Icon" />
        </Box>
      </Box>
    );
  }

  if (error) {
    console.error("Animation error:", error);
    return (
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0 }}>
          <Image src={appIcon} alt="App Icon" />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: 0 }}>
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </Box>
    </Box>  
  );
};

export default AppIconAnimation;

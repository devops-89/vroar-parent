import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Box } from "@mui/material";
import appIcon from "@/icons/MyTreks _ App Icon.svg";
import Image from "next/image";

interface APP_ICON_ANIMATION_PROPS {
  width?: number;
  height?: number;
}

const AppIconAnimation = ({ width, height }: APP_ICON_ANIMATION_PROPS) => {
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
      <Box sx={{ position: "relative", width: width, height: height }}>
        <Image src={appIcon} alt="App Icon" width={width} height={height} />
      </Box>
    );
  }

  if (error) {
    console.error("Animation error:", error);
    return (
      <Box sx={{ position: "relative", width: width, height: height }}>
        <Image src={appIcon} alt="App Icon" width={width} height={height} />
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", width: width, height: height }}>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: width, height: height }}
        />
      )}
    </Box>
  );
};

export default AppIconAnimation;

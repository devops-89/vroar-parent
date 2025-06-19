import { Stack, Typography } from "@mui/material";
import React from "react";
import tick from "@/homePage/home_hero_points.avif";
import Image from "next/image";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface HERO_POINTS {
  label: string;
  color?: string;
  justifyContent?: string;
  mt?: string | number;
}

const Home_hero_points = ({
  label,
  color,
  justifyContent,
  mt,
}: HERO_POINTS) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={2}
      justifyContent={justifyContent ?? "flex-start"}
      mt={mt ?? ""}
    >
      <Image src={tick} alt="tick" width={24} height={24} />
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: nunito.style,
          fontWeight: 500,
          color: color ?? COLORS.BLACK,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default Home_hero_points;

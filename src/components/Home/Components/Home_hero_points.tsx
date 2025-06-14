import { Stack, Typography } from "@mui/material";
import React from "react";
import tick from "@/homePage/home_hero_points.avif";
import Image from "next/image";
import { nunito } from "@/utils/fonts";
const Home_hero_points = ({ label }: { label: string }) => {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={2}>
      <Image src={tick} alt="tick" width={24} height={24} />
      <Typography
        sx={{ fontSize: 24, fontFamily: nunito.style, fontWeight: 500 }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default Home_hero_points;

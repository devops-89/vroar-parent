import React from "react";
import bg from "@/Mentors/why_join.avif";
import { Box } from "@mui/material";
const Promise = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        height: "100vh",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></Box>
  );
};

export default Promise;

import AboutSection from "@/components/about-us";
import Contact from "@/components/Home/Contact";
import { Box } from "@mui/material";
import React from "react";

const Aboutus = () => {
  return (
    <Box>
      <AboutSection />
      <Box sx={{ mt: 5 }}>
        <Contact />
      </Box>
    </Box>
  );
};

export default Aboutus;

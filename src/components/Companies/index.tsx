import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./components/hero-section";
import FeatureGrid from "./components/feature-grid";
import Support from "./components/support";

const CompanyLayout = () => {
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <HeroSection />
      <Box sx={{ position: "absolute", mt: "-100px", width: "100%", mb: 500 }}>
        <FeatureGrid />
      </Box>
      <Box sx={{ mt: 20 }}>
        <Support />
      </Box>
    </Box>
  );
};

export default CompanyLayout;

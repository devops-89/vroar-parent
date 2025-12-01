import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./components/hero-section";
import FeatureGrid from "./components/feature-grid";
import Support from "./components/support";
import Benefits from "./components/benefits";
import ProgramBreakdown from "./components/program-breakdown";
import Empower from "./components/how-we-empower";
import Promise from "./components/promise";
import CompanyTestimonial from "./components/testimonial";
import { companyTestimonial } from "@/assets/testimonial";

const CompanyLayout = () => {
  return (
    <Box sx={{ position: "relative", zIndex: { lg: 1, xs: 0 } }}>
      <HeroSection />
      <Box
        sx={{
          position: { lg: "absolute", xs: "initial" },
          mt: { lg: "-100px" },
          width: "100%",
          mb: { lg: 500, xs: 5 },
        }}
      >
        <FeatureGrid />
      </Box>
      <Box sx={{ mt: { lg: 30, xs: 5 } }}>
        <Support />
      </Box>
      <Box sx={{ mt: { lg: 20, xs: 5 } }}>
        <Benefits />
      </Box>
      <Box sx={{ mt: 10 }}>
        <ProgramBreakdown />
      </Box>
      <Box sx={{ mt: 10 }}>
        <Empower />
      </Box>
      <Box>
        <Promise />
      </Box>
      <Box sx={{ mt: 45 }}>
        <CompanyTestimonial testimonialData={companyTestimonial} />
      </Box>
    </Box>
  );
};

export default CompanyLayout;

import { Box } from "@mui/material";
import Contact from "../Home/Contact";
import HeroSection from "./components/Hero-section";
import Overview from "./components/overview";
import FaqSection from "../Home/Faqs";

const PricingLayout = () => {
  return (
    <Box>
      <HeroSection />
      <Overview />
      <Contact />
      <FaqSection />
    </Box>
  );
};

export default PricingLayout;

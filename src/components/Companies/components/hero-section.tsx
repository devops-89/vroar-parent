import GradientText from "@/components/common/Greadient-text";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import banner from "@/homePage/hero-section-baner.avif";
import { Box, Container, Grid } from "@mui/material";
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        minHeight: "120vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ pt: 6 }}>
        <Grid size={8} margin="auto">
          <Box data-aos="fade-left">
            <HeadingField
              label="Partner in purpose to"
              sx={{ fontFamily: "gomenasans-bold" }}
            />
          </Box>
          <Box data-aos="fade-right" data-aos-delay="200" sx={{ mb: 4 }}>
            <GradientText
              label="Power Careers"
              sx={{ fontFamily: "gomenasans-bold" }}
            />
          </Box>
          <Box
            data-aos="fade-up"
            sx={{ width: 700, textAlign: "center", m: "auto" }}
          >
            <ParaField label="Empower young minds, elevate your brand purpose, and create lasting impact where it matters most." />
          </Box>
          <Box sx={{ textAlign: "center", mt: 4 }} data-aos="fade-up">
            <ButtonWithIcon label="Contact Us" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

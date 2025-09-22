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
        height: { lg: "120vh", xs: "70vh" },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // pb: { xs: 10 },
      }}
    >
      <Container sx={{ pt: { lg: 6, xs: 15 } }}>
        <Grid size={{ lg: 8, xs: 12 }} margin="auto">
          <Box data-aos="fade-up">
            <HeadingField
              label="Partner in purpose to"
              sx={{
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 64, xs: 35 },
              }}
            />
          </Box>
          <Box data-aos="fade-up" data-aos-delay="200" sx={{ mb: 4 }}>
            <GradientText
              label="Power Careers"
              sx={{
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 64, xs: 35 },
              }}
            />
          </Box>
          <Box
            data-aos="fade-up"
            sx={{
              width: { lg: 700, xs: "100%" },
              textAlign: "center",
              m: "auto",
            }}
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

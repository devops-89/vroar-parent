import frame from "@/homePage/Choose-frame.avif";
import img1 from "@/homePage/choose-icon1.avif";
import img2 from "@/homePage/choose-icon2.avif";
import img3 from "@/homePage/choose-icon3.avif";
import img4 from "@/homePage/choose-icon4.avif";
import bannerImage from "@/homePage/hero-section-baner.avif";
import chooseBanner from "@/homePage/why-choose-section.avif";
import { COLORS } from "@/utils/enum";
import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import Image from "next/image";
import GradientText from "../common/Greadient-text";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import ButtonWithIcon from "./Components/ButtonWithIcon";
import CurvedBadge from "./Components/ChooseIcon";
import Home_hero_points from "./Components/Home_hero_points";
const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { lg: 10, xs: 0 },
      }}
    >
      <Container sx={{ mt: { lg: 20, xs: 20 } }}>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin={"auto"}>
            <Box data-aos="fade-left">
              <HeadingField
                label="Turn College Prep"
                className=""
                sx={{
                  fontFamily: "gomenasans-bold",
                  fontSize: { xs: 32, lg: 68 },
                }}
              />
            </Box>
            <Box data-aos="fade-left">
              <GradientText
                label="Chaos into Clarity"
                data-aos="fade-in"
                sx={{
                  fontFamily: "gomenasans-bold",
                  fontSize: { xs: 32, lg: 68 },
                }}
              />
            </Box>

            <ParaField
              label="By blending cutting-edge AI with expert mentorship, we help
              students unlock their potential and craft a personalized roadmap
              to success; so every student can step into college with clarity,
              confidence, and the courage to aim higher."
              sx={{ fontSize: { lg: 20, xs: 18 } }}
              textAlign="center"
              data-aos="fade-in"
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
              mt={2}
              flexWrap={{xs:"wrap",lg:"nowrap"}}
            >
              <Home_hero_points label="Coaches" />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: COLORS.PRIMARY, width: "2px" }}
              />
              <Home_hero_points label="Counselors" />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: COLORS.PRIMARY, width: "2px" }}
              />
              <Home_hero_points label="Mentors" />
            </Stack>
            <Box sx={{ mt: 25, position: "relative" }}>
              <Box
                sx={{
                  backgroundImage: `url(${chooseBanner.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "40vh",
                  marginTop: 10,
                  borderRadius: "3.125rem",
                  position: "relative",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{ position: "absolute", top: 20, width: "100%", px: 4 }}
                >
                  <CurvedBadge icon={img1} char="MYTREKSHIP" />
                  <CurvedBadge icon={img2} char="CAREER COUNSEL" />
                </Stack>
                <Box
                  sx={{
                    position: "absolute",
                    top: -145,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Image src={frame} alt="frame" width={400} height={400} />
                </Box>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  sx={{ position: "absolute", bottom: 20, width: "100%" }}
                >
                  <CurvedBadge icon={img3} char="Mentorship guide" />
                  <CurvedBadge icon={img4} char="Career voyage" />
                </Stack>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: -30,
                  zIndex: 999,
                }}
              >
                <ButtonWithIcon label="Get Started Today" width="250px" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

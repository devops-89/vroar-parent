import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LeaderShipCard from "./Leadership-card";
import ConfidenceCurriculum from "./Confidence-Curriculum";
import CareerPlaning from "./Career-Planing";
import careerBanner from "@/icons/parents-program/career-planning-workshop.avif";
import flexibleScheduling from "@/icons/parents-program/flexible-scheduling.avif";
import CliftonStrength from "./Clifton-strength";
import progressBanner from "@/icons/parents-program/progress-updates.avif";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import leadershipBanner from "@/icons/parents-program/leader-ship-banner.avif";
import leadershipicon from "@/icons/parents-program/leadership-coaching.avif";
import confidenceIcon from "@/icons/parents-program/confidence_curriculum.avif";
import confidenceBanner from "@/icons/parents-program/confidence_banner.avif";
import ProgramSlider from "./program-slider";
const Parentsprogram = () => {
  const careerData = [
    {
      img: careerBanner.src,
      heading: "Career Planning Workshops",
      description:
        "A dedicated career counselor workshops for strategic college & career planning",
      height: "60vh",
    },
    {
      img: flexibleScheduling.src,
      heading: "Flexible Scheduling",
      description: "Real-world internship through our MyTrekship program",
      height: "60vh",
    },
  ];
  return (
    <Box>
      <Container>
        <Badge label="Our Program" width={150} margin="auto" />
        <Grid container sx={{ mt: 5 }}>
          <Grid size={11} margin={"auto"}>
            <Typography
              sx={{
                letterSpacing: "-.04rem",
                mt: "-1rem",
                fontFamily: "gomenasans-bold,sans-serif",
                fontSize: { lg: 68, xs: 30 },
                fontWeight: 700,
                lineHeight: 1.1,
                textAlign: "center",
              }}
            >
              We Don’t Just Coach.{" "}
            </Typography>
            <Typography
              sx={{
                letterSpacing: "-.04rem",
                fontFamily: "gomenasans-bold,sans-serif",
                fontSize: { lg: 68, xs: 35 },
                fontWeight: 700,
                lineHeight: 1.1,
                mt: 2,
                textAlign: "center",
              }}
            >
              We Cultivate Rockstars
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: nunito.style,
                color: COLORS.TEXT_COLOR,
                textAlign: "center",
                mt: 2,
              }}
            >
              Every student receives a custom roadmap, not a generic to-do list.
            </Typography>
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
              <Grid container sx={{ mt: 10 }} spacing={7}>
                <Grid size={4}>
                  <LeaderShipCard
                    icon={leadershipicon}
                    backgroundImage={leadershipBanner.src}
                    heading="Leadership Coaching"
                    description="1:1 coaching from leadership coaches"
                  />
                </Grid>
                <Grid size={8}>
                  <Grid container spacing={4}>
                    <Grid size={12}>
                      <ConfidenceCurriculum
                        img={confidenceIcon}
                        backgroundImage={confidenceBanner.src}
                        heading="Confidence Curriculum"
                        description="A tailored curriculum that builds clarity, confidence, and critical thinking"
                      />
                    </Grid>
                    {careerData.map((item, index) => (
                      <Grid size={6} key={index}>
                        <CareerPlaning
                          img={item.img}
                          heading={item.heading}
                          description={item.description}
                          height={item.height}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={7} sx={{ mt: 4 }}>
                <Grid size={8}>
                  <CliftonStrength />
                </Grid>
                <Grid size={4}>
                  <Box
                    sx={{
                      backgroundImage: `url(${progressBanner.src})`,
                      padding: "32px",
                      backgroundPosition: "50%",
                      backgroundSize: "cover",
                      border: "1px solid #f3f3f3",
                      borderRadius: "20px",
                      height: "250px",
                    }}
                  >
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 32,
                        fontFamily: nunito.style,
                        fontWeight: 700,
                        textAlign: "justify",
                        lineHeight: 1.2,
                      }}
                    >
                      Progress Updates
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: nunito.style,

                        textAlign: "justify",
                        lineHeight: 1.4,
                      }}
                    >
                      Real-time progress updates for parents via our app
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: { lg: "none", xs: "block" } }}>
              <ProgramSlider />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <ButtonWithIcon label="See How Our Program Works" width={350} />
        </Box>
      </Container>
    </Box>
  );
};

export default Parentsprogram;

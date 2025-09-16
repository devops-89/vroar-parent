import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ScrollReveal from "../common/Scroll-reveal";
import ParaField from "../common/Para-Field";
import CurvedBadge from "../Home/Components/ChooseIcon";
import img1 from "@/icons/mentorship_guide.svg";
import img2 from "@/icons/trophy.avif";
const MentorAbout = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#fff5ea,#ffeccc)",
        position: "relative",
        pt: 10,
        pb: 10,
      }}
    >
      <Grid container>
        <Grid size={{ lg: 7, xs: 11 }} margin={"auto"}>
          <Stack justifyContent={"center"}>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={3}
            >
              At MyTreks.ai, we connect
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={3}
            >
              passionate professionals with
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={3}
            >
              motivated students through our
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={3}
            >
              gamified career exploration
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={3}
            >
              platform.
            </ScrollReveal>
          </Stack>
          <Box sx={{ mt: 3 }}>
            <Stack justifyContent={"center"}>
              <ScrollReveal
                baseOpacity={1}
                enableBlur={true}
                baseRotation={5}
                blurStrength={3}
              >
                Students use their earned
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={1}
                enableBlur={true}
                baseRotation={5}
                blurStrength={3}
              >
                achievements to unlock valuable
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={1}
                enableBlur={true}
                baseRotation={5}
                blurStrength={3}
              >
                sessions with mentors like you.
              </ScrollReveal>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ position: "absolute", top: { lg: "20%", xs: 0 }, right: 100 }}>
        <CurvedBadge char="mentorship guide" icon={img1} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 50,
          bottom: { lg: "50%", xs: 0 },
          top: { lg: "50%", xs: "90%" },
        }}
      >
        <CurvedBadge char="Gamified Learning" icon={img2} />
      </Box>
    </Box>
  );
};

export default MentorAbout;

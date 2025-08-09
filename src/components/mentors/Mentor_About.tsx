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
        <Grid size={7} margin={"auto"}>
          <ScrollReveal
            baseOpacity={1}
            enableBlur={true}
            baseRotation={5}
            blurStrength={3}
          >
            At MyTreks.ai, we connect passionate professionals with motivated
            students through our gamified career exploration platform.
          </ScrollReveal>
          <Box sx={{ mt: 3 }}>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={3}
            >
              Students use their earned achievements to unlock valuable sessions
              with mentors like you.
            </ScrollReveal>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ position: "absolute", top: "20%", right: 100 }}>
        <CurvedBadge char="mentorship guide" icon={img1} />
      </Box>
      <Box sx={{ position: "absolute", left: 50, bottom: "50%", top: "50%" }}>
        <CurvedBadge char="Gamified Learning" icon={img2} />
      </Box>
    </Box>
  );
};

export default MentorAbout;

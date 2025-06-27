import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Badge from "../Components/Badge";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import CounselingCard from "./CounselingCard";
import { COUNSELING_CARD_DATA } from "@/assets/Counseling";

const Counseling = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="counseling" width={100} margin="auto" />
            <Typography
              sx={{
                fontFamily: "gomenasans,arial,sans-serif",
                fontWeight: 700,
                fontSize: 64,
                // letterSpacing: "-2.50px",
                lineHeight: 1,
                mt: 2,
                textAlign: "center",
              }}
            >
              Career Counseling Workshops That Create True Clarity
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: nunito.style,
                color: COLORS.TEXT_COLOR,
                width: 750,
                margin: "auto",
                textAlign: "center",
                mt: 3,
              }}
            >
              Our career counseling workshops bring together experienced
              counselors and students in high-impact sessions.
            </Typography>

            <Box>
              <CounselingCard data={COUNSELING_CARD_DATA} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Counseling;

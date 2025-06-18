import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Badge from "./Components/Badge";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const Choose = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Why Mytreks.ai?" width={150} margin="auto" />
            <Typography
              sx={{
                fontSize: "4rem",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.2,
                mt: 3,
                fontFamily: nunito.style,
                mb: 4,
              }}
            >
              Confidence isn’t taught it’s discovered and unlocked
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                // mt: 7,
                width: 780,
                margin: "auto",
                fontSize: 20,
                color: COLORS.TEXT_COLOR,
                fontFamily: nunito.style,
                lineHeight: 1.2,
              }}
            >
              We blend proven psychology, the Clifton Strengths framework, and
              responsible AI to help your child uncover what makes them unique
              and build a future around it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Choose;

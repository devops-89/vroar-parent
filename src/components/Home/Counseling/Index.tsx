import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Badge from "../Components/Badge";

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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Counseling;

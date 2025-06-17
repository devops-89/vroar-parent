import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Badge from "./Components/Badge";

const Choose = () => {
  return (
    <Box sx={{ pt: 4 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
              <Badge label="Why Mytreks.ai?" width={150} margin="auto" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Choose;

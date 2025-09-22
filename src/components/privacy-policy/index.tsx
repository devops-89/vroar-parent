import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ContentSidebar from "./components/sidebar";

const PrivacyPolicyLayout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={3}>
            <ContentSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyLayout;

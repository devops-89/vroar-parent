import { Box, Container } from "@mui/material";
import React from "react";
import banner from "@/banner/parents/workshopBanner.avif";
import Badge from "@/components/Home/Components/Badge";
const Workshop = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        p: 10,
      }}
    >
      <Container maxWidth="lg">
        <Badge label="Workshop" margin="auto" width={100} />
        
      </Container>
    </Box>
  );
};

export default Workshop;

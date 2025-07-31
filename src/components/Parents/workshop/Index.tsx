import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "@/banner/parents/workshopBanner.avif";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import ParaField from "@/components/common/Para-Field";
import HeadingField from "@/components/common/Heading-Field";
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
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Workshop" margin="auto" width={100} />
            <HeadingField
              label="Family-First Career Planning That Actually Works"
              color={COLORS.WHITE}
            />
            <ParaField
              label="Designed as a family partnership. Delivered with expert guidance."
              color={COLORS.WHITE}
              fontSize={20}
              textAlign="center"
              sx={{ mt: 2 }}
            />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Workshop;

import GradientText from "@/components/common/Greadient-text";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import SupportCard from "./support-card";

const Support = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid size={10} margin="auto">
            <Box data-aos="fade-left">
              <Badge label="Support" margin="auto" width={120} />
            </Box>

            <HeadingField
              label="Support a Student &
empower a Soldier’s Family"
              sx={{ fontWeight: 700, fontFamily: "gomenasans-bold" }}
              dataaos="fade-up"
            />
            <ParaField
              label="Real Mentorship. Real Careers. Real Change."
              dataaos="fade-up"
              sx={{ textAlign: "center" }}
            />
            <Stack direction={"row"} alignItems={"center"} spacing={2} justifyContent={"center"} sx={{ mt: 3 }} >
              <HeadingField label="How" sx={{ fontSize: 36 }} />
              <GradientText label="Companies" sx={{ fontSize: 36, mt: 2 }} />
              <HeadingField label="Create Impact" sx={{ fontSize: 36 }} />
            </Stack>
            <Grid container>
              <Grid size={4}>
                <SupportCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;

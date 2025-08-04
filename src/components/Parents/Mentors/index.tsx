import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ParentMentorCard from "./Parent-Mentor-Card";

const OurMentorsParents = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={7} margin={"auto"}>
            <Badge label="our Mentors" width={120} margin="auto" />
            <HeadingField
              label="Real Mentors.
Real Talk. Real Clarity "
              fontSize={68}
            />
            <ParaField
              label="Get access to mentors who’ve been there, done that. Students choose from mentors in fields like finance, fashion, engineering, or entrepreneurship."
              textAlign="center"
              color={COLORS.LIGHT_BLACK}
              sx={{ mt: 2 }}
            />
            <Box sx={{ textAlign: "center" }}>
              <ParentMentorCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMentorsParents;

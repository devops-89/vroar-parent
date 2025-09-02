import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import EmpowerCard from "./empower-card";
import { empowerCard_data } from "@/assets/mentors";

const Empower = () => {
  return (
    <Box sx={{ backgroundColor: "#fff3f0", py: 10 }}>
      <Container>
        <Grid container>
          <Grid size={8} margin="auto">
            <Badge label="HOW WE EMPOWER" width={150} margin="auto" />
            <HeadingField
              label="Where Purpose Meets Possibility"
              sx={{
                fontFamily: "gomenasans-bold",
                lineHeight: 1.1,
                letterSpacing: "-.04em",
                mt: 2,
              }}
            />
            <ParaField
              label="From internships to coaching, we help teens connect passion to profession, especially those in underserved communities and military households."
              sx={{
                color: COLORS.TEXT_COLOR,
                fontSize: 20,
                textAlign: "center",
                mt: 2,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={3}>
          {empowerCard_data.map((val, i) => (
            <Grid size={4} key={i}>
              <EmpowerCard
                img={val.img}
                heading={val.heading}
                description={val.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Empower;

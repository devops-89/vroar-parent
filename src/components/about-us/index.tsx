import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import { COLORS } from "@/utils/enum";
import TeamCard from "./team-card";
import { TEAMS_DATA } from "@/assets/mentors";

const AboutSection = () => {
  return (
    <Box sx={{ pt: 20 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={8} margin={"auto"}>
            <Badge label="our team" margin="auto" width="100px" />
            <HeadingField
              label="Meet the team
that makes the magic happen"
              sx={{
                fontSize: 65,
                fontFamily: "gomenasans-bold",
                lineHeight: 1.1,
                letterSpacing: "-.04em",
              }}
            />
            <ParaField
              label="The Visionaries Behind My Treks’s Innovation"
              sx={{
                mt: 3,
                color: COLORS.TEXT_COLOR,
                textAlign: "center",
                fontSize: 24,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {TEAMS_DATA.map((val, i) => (
            <Grid
              size={4}
              key={i}
              data-aos="fade-left"
              data-aos-delay={`${i + 1 * 100}`}
            >
              <TeamCard
                img={val.img}
                name={val.name}
                summary={val.summary}
                designation={val.designation}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

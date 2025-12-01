import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import JoinCard from "./Components/join-card";
import { JOIN_CARD_DATA } from "@/assets/mentors";

const Whyjoinus = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Badge label="Why Join Us?" width={120} margin="auto" />
      <Container>
        <Grid container>
          <Grid size={{ lg: 8, xs: 12 }} margin="auto">
            <HeadingField
              label="Why Mentors Choose MyTreks.ai"
              sx={{ fontSize: { lg: 64, xs: 35 } }}
            />
            <ParaField
              label="Effortless guidance, lasting impact, mentor with ease and inspire with purpose"
              sx={{
                fontSize: { lg: 24, xs: 20 },
                lineHeight: 1.4,
                textAlign: "center",
                width: { lg: 500, xs: "100%" },
                margin: "auto",
                color: "#5E5E5E",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {JOIN_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 4, xs: 12 }} key={i}>
              <JoinCard
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

export default Whyjoinus;

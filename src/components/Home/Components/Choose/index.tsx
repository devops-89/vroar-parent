import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Badge from "../Badge";
import ChooseCard from "./ChooseCard";
import { data } from "@/assets/data";
import ButtonWithIcon from "../ButtonWithIcon";

const Choose = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Why Mytreks.ai?" width={150} margin="auto" />
            <Typography
              sx={{
                fontSize: { lg: 64, xs: 25 },
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.2,
                mt: 3,
                fontFamily: "gomenasans-bold",
                mb: 4,
              }}
              data-aos="fade-up"
            >
              Confidence isn’t taught. It’s uncovered, nurtured, and empowered.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                // mt: 7,
                width: { lg: 780, xs: "100%" },
                margin: "auto",
                fontSize: { lg: 20, xs: 14 },
                color: COLORS.TEXT_COLOR,
                fontFamily: nunito.style,
                lineHeight: 1.2,
              }}
              data-aos="fade-up"
            >
              We’re helping your child discover who they are before deciding
              what they want to do by combining neuroscience, the
              CliftonStrengths® framework, and smart AI.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={5}>
          {data.chooseCard.map((val, i) => (
            <Grid
              size={{ lg: 4, xs: 12 }}
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${i + 1 * 200}`}
            >
              <ChooseCard
                img={val.img}
                title={val.title}
                description={val.description}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <ButtonWithIcon label="Discover How it works" width="300px" />
        </Box>
      </Container>
    </Box>
  );
};

export default Choose;

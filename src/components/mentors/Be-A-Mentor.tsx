import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import MentorProgressCard from "./mentor-progress-card";
import { MENTOR_PROGRESS } from "@/assets/Mentor-Progress";
import Arrow from "@/banner/mentors/beMentor/arrow.avif";
import Image from "next/image";
import ButtonWithIcon from "../Home/Components/ButtonWithIcon";
const Bementor = () => {
  return (
    <Box sx={{ pt: 10, backgroundColor: "#fff3f0" }}>
      <Container>
        <Grid container>
          <Grid size={9} margin={"auto"}>
            <Badge label="Be a mentor" margin="auto" width={130} />
            <Stack spacing={-4}>
              <HeadingField label="How to" />
              <HeadingField label="Become a Mentor?" />
            </Stack>
            <ParaField
              label="College students and professionals can guide school kids exploring careers.
Share your journey, offer real advice, and make a lasting impact"
              fontSize={20}
              textAlign="center"
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ mt: 10 }}
          columns={{ xs: 1, md: 14 }}
          alignItems="center"
        >
          {MENTOR_PROGRESS.map((val, i) => (
            <React.Fragment key={i}>
              <Grid size={{ xs: 1, md: 4 }}>
                <MentorProgressCard
                  img={val.img}
                  heading={val.heading}
                  description={val.description}
                />
              </Grid>
              {i !== MENTOR_PROGRESS.length - 1 && (
                <Grid
                  size={{ xs: 1, md: 1 }}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Arrow} alt="" width={35} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
        <Box textAlign={"center"} sx={{ mt: 5 }}>
          <ButtonWithIcon label="Become a Mentor" width={"fit-content"} />
        </Box>
      </Container>
    </Box>
  );
};

export default Bementor;

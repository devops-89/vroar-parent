import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CurriculumCard from "./Curriculum-card";
import selfAwareness from "@/banner/parents/curriculum/self-awareness.avif";
import alignedGoals from "@/banner/parents/curriculum/aligned-goals.avif";
import selfReflection from "@/banner/parents/curriculum/self-reflection.avif";
const ParentCurriculum = () => {
  const curriculumData = [
    {
      img: selfAwareness,
      heading: "Self-Awareness Wins",
      description: "Make smarter decisions with self-awareness",
    },
    {
      img: alignedGoals,
      heading: "Aligned Goals",
      description: "Set and achieve more aligned goals",
    },
    {
      img: selfReflection,
      heading: "Deep Self-Reflection",
      description: "College essay prep through guided reflection",
    },
  ];
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={8} margin={"auto"}>
            <Badge label="OUR CURRICULUM" width={150} margin="auto" />
            <HeadingField
              label="Brain-Based Learning That Sticks"
              sx={{ mt: 2, lineHeight: 1.2 }}
            />
            <ParaField
              label="Neuroscience-backed. Gamified. Metacognitive. Our curriculum keeps students engaged and evolving."
              fontSize={20}
              color={COLORS.LIGHT_BLACK}
              textAlign="center"
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container>
          {curriculumData.map((val, i) => (
            <Grid size={4} key={i}>
              <CurriculumCard
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

export default ParentCurriculum;

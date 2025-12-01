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
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import { useDispatch } from "react-redux";
import { showModal } from "@/redux/reducers/Modal";
import BookaDemo from "@/assets/ModalCalling/website/book-a-demo";
import Link from "next/link";
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

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal(<BookaDemo />));
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={{ lg: 8, xs: 12 }} margin={"auto"}>
            <Badge label="OUR CURRICULUM" width={150} margin="auto" />
            <HeadingField
              label="Brain-Based Learning That Sticks"
              sx={{
                mt: 2,
                lineHeight: 1.2,
                fontSize: { xs: 30, lg: 68 },
                fontFamily: "gomenasans-bold",
              }}
            />
            <ParaField
              label="Neuroscience-backed. Gamified. Metacognitive. Our curriculum keeps students engaged and evolving."
              color={COLORS.LIGHT_BLACK}
              textAlign="center"
              sx={{ mt: 2, fontSize: { xs: 16, lg: 20 } }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {curriculumData.map((val, i) => (
            <Grid size={{ lg: 4, xs: 12 }} key={i}>
              <CurriculumCard
                img={val.img}
                heading={val.heading}
                description={val.description}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Link href="/login">
            <ButtonWithIcon label="Get Started Now" sx={{ width: 250 }} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ParentCurriculum;

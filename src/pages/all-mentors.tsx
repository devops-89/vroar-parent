import { UserController } from "@/assets/api/UserController";
import HeadingField from "@/components/common/Heading-Field";
import Badge from "@/components/Home/Components/Badge";
import MentorCard from "@/components/mentors/Components/mentor-card";
import { COLORS } from "@/utils/enum";
import { MENTOR_CARD_PROPS } from "@/utils/types";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";

type MentorsResponse = { docs: MENTOR_CARD_PROPS[] } | null;

const AllMentors = () => {
  const [mentors, setMentors] = useState<MentorsResponse>(null);
  const [loading, setLoading] = useState(true);

  const getMentorsList = () => {
    UserController.getMentorList()
      .then((res) => {
        const response = res.data.data as { docs: MENTOR_CARD_PROPS[] };
        setMentors(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getMentorsList();
  }, []);

  return (
    <Box sx={{ pt: 20, pb: 20 }}>
      <Badge label="Mentors" margin="auto" width={100} />
      <HeadingField
        label="Mentors Library"
        sx={{ fontFamily: "gomenasans-bold", fontSize: { lg: 64, xs: 35 } }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                sx={{ color: COLORS.PRIMARY, margin: "auto" }}
              />
            </Box>
          ) : (
            mentors?.docs?.map((val: MENTOR_CARD_PROPS, i: number) => (
              <Grid
                key={i}
                size={{ lg: 4, xs: 12 }}
                data-aos="fade-up"
                data-aos-delay={i + 1 * 100}
              >
                <MentorCard
                  avatar={val.avatar}
                  firstName={val.firstName}
                  lastName={val.lastName}
                  careerSummary={val.careerSummary}
                  designation={val.designation}
                  professionalBackground={val.professionalBackground}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllMentors;

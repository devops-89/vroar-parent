import { Box, Container, Grid } from "@mui/material";
import React from "react";
import whyChoose from "@/Mentors/why_join.avif";
import HeadingField from "../common/Heading-Field";
import { COLORS } from "@/utils/enum";
import ParaField from "../common/Para-Field";
import ButtonWithIcon from "../Home/Components/ButtonWithIcon";
import SpeakerMentorAnimation from "./Components/Speaker-Mentor-animation";
import { useDispatch } from "react-redux";
import { showModal } from "@/redux/reducers/Modal";
import SpeakerMentorModal from "@/assets/ModalCalling/website/speaker-mentor";
const WhyChoose = () => {
  const dispatch = useDispatch();

  const speakerMentor = () => {
    dispatch(showModal(<SpeakerMentorModal />));
  };
  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundImage: `url(${whyChoose.src})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            borderRadius: "57px",
            padding: { lg: "60px 40px 60px 60px", xs: "40px 20px 40px 40px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Grid container>
              <Grid size={{ lg: 6, xs: 12 }}>
                <HeadingField
                  label="Why Choose? Be Both!"
                  color={COLORS.WHITE}
                  textAlign="left"
                  sx={{
                    letterSpacing: { lg: "-2.56px", xs: "1.50px" },
                    fontWeight: 700,
                    lineHeight: 1,
                    fontSize: { lg: 64, xs: 35 },
                  }}
                />
                <ParaField
                  label="Mentors and speakers in our community connect with students in two powerful ways, amplifying their influence"
                  fontSize={20}
                  color={COLORS.WHITE}
                  sx={{ lineHeight: 1.4, mt: 3 }}
                />
                <ButtonWithIcon
                  label="Apply Now"
                  sx={{ mt: 3 }}
                  onClick={speakerMentor}
                />
              </Grid>
              <Grid
                size={{ lg: 6, xs: 12 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SpeakerMentorAnimation />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChoose;

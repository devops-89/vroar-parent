import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Badge from "../Home/Components/Badge";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import bg_frame from "@/Mentors/mic__frane.avif";
import Image from "next/image";
import BeSpeakerCard from "./Components/Be-speaker-card";
import number1 from "@/Mentors/1.avif";
import number2 from "@/Mentors/2.avif";
import number3 from "@/Mentors/3.avif";
import number4 from "@/Mentors/4.avif";
import ButtonWithIcon from "../Home/Components/ButtonWithIcon";
const BeSpeaker = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Be A Speaker" width={130} margin="auto" />
            <HeadingField
              label="Step Into the Spotlight"
              sx={{
                letterSpacing: "-2.56px",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1,
                mt: 2,
              }}
            />
            <ParaField
              label="Submit your topic, get scheduled, and present in a supportive space by creating a lasting impact"
              fontSize={24}
              color="#5E5E5E"
              sx={{ lineHeight: 1.4, textAlign: "center", mt: 2 }}
            />
          </Grid>
        </Grid>
        <Box sx={{ position: "relative", mt: 10 }}>
          <Image
            src={bg_frame}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <Box sx={{ position: "absolute", top: 200, left: -50 }}>
            <BeSpeakerCard
              img={number1}
              heading="Submit Your Topic"
              description="Share your area of expertise and help shape meaningful conversations"
            />
          </Box>
          <Box sx={{ position: "absolute", left: "20%", bottom: -140 }}>
            <BeSpeakerCard
              img={number2}
              heading="Get Scheduled & Promoted"
              description="We handle the logistics and spread the word to our engaged community"
            />
          </Box>
          <Box sx={{ position: "absolute", left: "50%", bottom: -200 }}>
            <BeSpeakerCard
              img={number3}
              heading="Present in a Supportive Space"
              description="Deliver your insights in a welcoming environment designed for impactful discussions"
            />
          </Box>
          <Box sx={{ position: "absolute", right: -50, top: 200 }}>
            <BeSpeakerCard
              img={number4}
              heading="Leave a Lasting Impact"
              description="Deliver your insights in a welcoming environment designed for impactful discussions"
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", mt: 30 }}>
          <ButtonWithIcon label="Become a Speaker" width={250} />
        </Box>
      </Container>
    </Box>
  );
};

export default BeSpeaker;

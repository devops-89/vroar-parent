import { Box } from "@mui/material";
import React from "react";
import FaqSection from "../common/Faq-Section";
import { MENTOR_FAQ_DATA } from "@/assets/faqData";

const MentorFaqSection = () => {
  return (
    <Box>
      <FaqSection
        faqData={MENTOR_FAQ_DATA}
        heading="FREQUENTLY ASKED"
        subHeading="QUESTIONS"
        description="Find answers to common queries about MyTreks, from features to mentorship benefits and everything in between"
      />
    </Box>
  );
};

export default MentorFaqSection;

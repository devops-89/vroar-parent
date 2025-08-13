import { COLORS } from "@/utils/enum";
import { Box, Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import card1 from "@/banner/mentors/speaker_perks/perks-card/build.avif";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
const SpeakerPerksCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: COLORS.WHITE,
        borderRadius: "16px",
        padding: "20px",
        gap: 5,
      }}
    >
      <Image src={card1} alt="" />
      <Box>
        <HeadingField
          label="Connect with Families"
          fontSize={24}
          sx={{ lineHeight: 1.4, fontWeight: 700, textAlign: "left" }}
        />
        <ParaField
          label="Engage with motivated students and parents"
          sx={{ fontSize: 20, lineHeight: 1.4 }}
        />
      </Box>
    </Card>
  );
};

export default SpeakerPerksCard;

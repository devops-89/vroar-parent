import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import middleMentor from "@/banner/mentors/mentor_hero.avif";
import { COLORS } from "@/utils/enum";
import SimpleButton from "../Home/Components/SimpleButton";
import Secondarybutton from "../common/Secondary-Button";
import { nunito } from "@/utils/fonts";
import CurvedBadge from "../Home/Components/ChooseIcon";
import hat from "@/homePage/choose-icon1.avif";
import img2 from "@/homePage/choose-icon2.avif";
const MentorMiddle = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Image
        src={middleMentor}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "160px",
            padding: "16px",
            position: "absolute",
            bottom: "1.375rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            zIndex: 999,
          }}
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
        >
          <SimpleButton label="Become a Mentor" />
          <Secondarybutton
            label="Become a Speaker"
            sx={{
              border: `1px solid ${COLORS.BLACK}`,
              backgroundColor: COLORS.TRANSPARENT,
              color: COLORS.BLACK,
              fontSize: 18,
              fontFamily: nunito.style.fontFamily,
              borderRadius: "10rem",
              textTransform: "initial",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default MentorMiddle;

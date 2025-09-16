import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import message from "@/homePage/choose/personal_support.png";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { nunito } from "@/utils/fonts";
import { CHOOSE_CARD_PROPS } from "@/utils/types";
const ChooseCard = ({ img, title, description }: CHOOSE_CARD_PROPS) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundColor: "#fff2f2",
        padding: { lg: "24px", xs: "20px" },
        borderRadius: "16px",
        height: { lg: 250, xs: 180},
      }}
    >
      <Image src={img} alt="" width={phone ? 50 : 90} />
      <Typography
        sx={{
          fontSize: { lg: 24, xs: 18 },
          fontFamily: nunito.style,
          color: COLORS.BLACK,
          lineHeight: 1.1,
          fontWeight: 700,
          mt: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: 20, xs: 16 },
          lineHeight: 1.4,
          fontFamily: nunito.style,
          mt: 1,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ChooseCard;

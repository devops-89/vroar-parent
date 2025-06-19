import { Box, Typography } from "@mui/material";
import React from "react";
import message from "@/homePage/choose/personal_support.png";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { nunito } from "@/utils/fonts";
import { CHOOSE_CARD_PROPS } from "@/utils/types";
const ChooseCard = ({ img, title, description }: CHOOSE_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff2f2",
        padding: "24px",
        borderRadius: "16px",
      }}
    >
      <Image src={img} alt="" width={90} />
      <Typography
        sx={{
          fontSize: 24,
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
        sx={{ fontSize: 20, lineHeight: 1.4, fontFamily: nunito.style, mt: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ChooseCard;

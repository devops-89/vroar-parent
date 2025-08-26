import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import icon from "@/Mentors/join_us/icon1.svg";
import ParaField from "@/components/common/Para-Field";
import { JOIN_CARD_PROPS } from "@/utils/types";
const JoinCard = ({ img, heading, description }: JOIN_CARD_PROPS) => {
  return (
    <Box
      sx={{
        border: "1px solid #fed6cc",
        p: "24px 20px",
        borderRadius: "20px",
        height: 250,
      }}
    >
      <Image src={img} alt="" />
      <ParaField
        label={heading}
        fontSize={24}
        sx={{ fontWeight: 700, my: 1 }}
      />
      <ParaField
        label={description}
        fontSize={22}
        sx={{ lineHeight: 1.4 }}
        color="#737373"
      />
    </Box>
  );
};

export default JoinCard;

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
        p: { lg: "24px 20px", xs: "20px 15px" },
        borderRadius: "20px",
        height: { lg: 250, xs: "100%" },
        mt: { xs: 2},
      }}
    >
      <Image src={img} alt="" />
      <ParaField
        label={heading}
        sx={{ fontWeight: 700, my: 1, fontSize: { lg: 24, xs: 20 } }}
      />
      <ParaField
        label={description}
        sx={{ lineHeight: 1.4, fontSize: { lg: 20, xs: 18 } }}
        color="#737373"
      />
    </Box>
  );
};

export default JoinCard;

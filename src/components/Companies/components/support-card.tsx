import { Box } from "@mui/material";
import React from "react";
import support_bg from "@/companies/connect_bg.avif";
import img1 from "@/companies/micro-internships.avif";
import Image from "next/image";
import ParaField from "@/components/common/Para-Field";
import { JOIN_CARD_PROPS } from "@/utils/types";
import arrow from "@/icons/arrow-rigth.avif";
const SupportCard = ({
  img,
  heading,
  description,
  isLast,
}: JOIN_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${support_bg.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        border: "1px solid #f3f3f3",
        borderRadius: "20px",
        padding: "25px",
        position: "relative",
        height: "100%",
      }}
    >
      <Image src={img} alt="" width={80} />
      <ParaField label={heading} sx={{ fontSize: 24, fontWeight: 700 }} />
      <ParaField label={description} sx={{ fontSize: 20, color: "#262626" }} />
      {!isLast && (
        <Box
          sx={{
            border: "1px solid #dcdcdc",
            borderRadius: "10rem",
            width: 20,
            height: 20,
            display: {lg:"flex",xs:"none"},
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            inset: "50% -1.4rem auto auto",
            transform: "translateY(-50%)",
            boxShadow:
              "0 1px 2px #0000000a, 0 3px 3px #00000008, 0 7px 4px #00000005, 0 12px 5px #00000003",
            zIndex: 1,
          }}
        >
          <Image src={arrow} alt="arrow" width={40} height={40} />
        </Box>
      )}
    </Box>
  );
};

export default SupportCard;

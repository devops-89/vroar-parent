import { Box, useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import pin from "@/banner/parents/curriculum/pin.avif";
import self from "@/banner/parents/curriculum/self-awareness.avif";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";

interface CurriculumCardProps {
  img: StaticImageData;
  heading: string;
  description: string;
}
const CurriculumCard = ({ img, heading, description }: CurriculumCardProps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        border: "2px solid #f8f9ff",
        borderRadius: "20px",
        padding: "48px 16px 16px",
        position: "relative",
        boxShadow:
          "0 7px 15px #0000000a, 0 28px 28px #00000008, 0 63px 63px #00000005, 0 111px 111px #00000003",
        // height: 420,
      }}
    >
      <Box sx={{ top: -20, position: "absolute", left: "50%", right: "50%" }}>
        <Image
          src={pin}
          alt=""
          width={phone ? 30 : 44}
          height={phone ? 44 : 60}
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Image
          src={img}
          alt=""
          width={phone ? 100 : 192}
          height={phone ? 100 : 192}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff1e8",
          borderRadius: "12px",
          padding: "32px 16px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <HeadingField
          label={heading}
          sx={{ lineHeight: 1.1, fontSize: { xs: 20, lg: 24 } }}
        />
        <ParaField
          label={description}
          sx={{ mt: 1, fontSize: { lg: 20, xs: 15 } }}
        />
      </Box>
    </Box>
  );
};

export default CurriculumCard;

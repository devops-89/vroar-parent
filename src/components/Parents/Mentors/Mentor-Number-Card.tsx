import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import numberOne from "@/banner/parents/mentor/card-1.avif";
import Image, { StaticImageData } from "next/image";
import HeadingField from "@/components/common/Heading-Field";

interface MentorNumberCardPrps {
  top?: number | string;
  right?: number | string;
  left?: number | string;
  img: StaticImageData;
  label: string;
  bottom?: number | string;
}
const MentornumberCard = ({
  top,
  bottom,
  right,
  left,
  img,
  label,
}: MentorNumberCardPrps) => {
  return (
    <Box>
      <Card
        sx={{
          position: "absolute",
          zIndex: 2,
          borderRadius: "12px",
          width: "430px",
          padding: "22px",
          fontSize: 24,
          boxShadow:
            "0 54.21px 82.64px #00000026, 0 -25.12px 26.44px #ffffff1a, 0 -8.59px 40px #0000001a",
          top: top,
          right: right,
          bottom: bottom,
          left: left,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Image src={img} alt="" width={50} />
          <HeadingField
            label={label}
            fontSize={"24px"}
            sx={{ lineHeight: 1.4, textAlign: "left" }}
          />
        </Stack>
      </Card>
    </Box>
  );
};

export default MentornumberCard;

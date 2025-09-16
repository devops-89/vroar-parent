import {
  Box,
  Card,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
  sx?: SxProps<Theme>;
}
const MentornumberCard = ({
  top,
  bottom,
  right,
  left,
  img,
  label,
  sx,
}: MentorNumberCardPrps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Card
        sx={{
          position: "absolute",
          zIndex: 2,
          borderRadius: "12px",
          width: { lg: "430px", xs: "300px" },
          padding: "22px",
          fontSize: 24,
          boxShadow:
            "0 54.21px 82.64px #00000026, 0 -25.12px 26.44px #ffffff1a, 0 -8.59px 40px #0000001a",
          top: top,
          right: right,
          bottom: bottom,
          left: left,
          ...sx,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={{ lg: 3, xs: 1 }}
        >
          <Image src={img} alt="" width={phone ? 40 : 50} />
          <HeadingField
            label={label}
            sx={{
              lineHeight: 1.4,
              textAlign: "left",
              fontSize: { lg: 24, xs: 14 },
            }}
          />
        </Stack>
      </Card>
    </Box>
  );
};

export default MentornumberCard;

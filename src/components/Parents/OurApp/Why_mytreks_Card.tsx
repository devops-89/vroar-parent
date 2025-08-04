import { Card, Stack } from "@mui/material";
import React from "react";
import tick from "@/icons/tick.png";
import Image from "next/image";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";

interface WhyMyTreksCardProps {
  label: string;
}
const WhyMyTreksCard = ({ label }: WhyMyTreksCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: "160px",
        padding: "8px 16px 8px 8px",
        boxShadow:
          "0 2.04px 2.04px #0000000a, 0 6.8px 6.8px #00000008, 0 15.64px 15.64px #00000005, 0 27.88px 10.88px #00000003",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Image src={tick} alt="" width={50} />
        <HeadingField
          label={label}
          fontSize={18}
          color={COLORS.LIGHT_BLACK}
          sx={{ fontWeight: 700 }}
        />
      </Stack>
    </Card>
  );
};

export default WhyMyTreksCard;

import { Card, List, ListItem, ListItemText, Stack } from "@mui/material";
import React from "react";
import trackChallenge from "@/banner/parents/App/track-challenge.avif";
import Image, { StaticImageData } from "next/image";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";

interface AppFeatureCardProps {
  img: StaticImageData;
  heading: string;
  description: string;
}
const AppFeatureCard = ({ img, heading, description }: AppFeatureCardProps) => {
  return (
    <Card sx={{ padding: "24px", borderRadius: "16px" }}>
      <Stack direction={"row"} spacing={1}>
        <Image src={img} alt="" width={100} />

        <Stack spacing={1} sx={{ mt: 1 }}>
          <HeadingField
            label={heading}
            sx={{ lineHeight: 1.1, fontSize: { lg: 24, xs: 20 } }}
            textAlign="left"
          />
          <ParaField
            label={description}
            textAlign="left"
            sx={{ lineHeight: 1.4, fontSize: { lg: 20, xs: 16 } }}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default AppFeatureCard;

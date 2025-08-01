import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

import highSchool from "@/banner/parents/workshop/img1.avif";
import Image, { StaticImageData } from "next/image";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
interface WorkshopCardProps {
  img: StaticImageData;
  workshopLabel: string;
  heading: string;
  description: string;
  labelColor: string;
}
const WorkshopCard = ({
  img,
  workshopLabel,
  heading,
  description,
  labelColor,
}: WorkshopCardProps) => {
  return (
    <Card
      sx={{ padding: "20px", borderRadius: "4px", border: "3px solid #fff3f0" }}
    >
      <Grid container spacing={3}>
        <Grid size={6}>
          <Image
            src={img}
            alt="img"
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </Grid>
        <Grid size={6}>
          <Box
            sx={{
              color: "#232323",
              paddingTop: "2px",
              paddingLeft: "8px",
              paddingRight: "8px",
              backgroundColor: labelColor,
              borderRadius: "4px",
              height: "26px",
              fontWeight: 500,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              fontFamily: nunito.style.fontFamily,
            }}
          >
            {workshopLabel}
          </Box>
          <HeadingField
            label={heading}
            fontSize={36}
            textAlign="left"
            sx={{ lineHeight: 1.2 }}
          />
          <ParaField
            label={description}
            color={COLORS.LIGHT_BLACK}
            fontSize={20}
            sx={{ mt: 1, lineHeight: 1.2 }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default WorkshopCard;

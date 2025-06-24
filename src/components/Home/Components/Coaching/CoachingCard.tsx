import { Card, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import coaching1 from "@/homePage/coaching/coaching1.png";
const CoachingCard = () => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: ".125rem solid #ffcab5",
        padding: "24px 16px",
      }}
    >
      <Stack direction={"row"} alignItems="center" spacing={3}>
        <Image src={coaching1} alt="" width={50} />
      </Stack>
    </Card>
  );
};

export default CoachingCard;

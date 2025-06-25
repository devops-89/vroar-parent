import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import coaching1 from "@/homePage/coaching/coaching1.png";
import { nunito } from "@/utils/fonts";
import { COACHING_CARD_PROPS } from "@/utils/types";
const CoachingCard = ({ img, heading, description }: COACHING_CARD_PROPS) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: ".125rem solid #ffcab5",
        padding: "24px 16px",
        borderRadius: "12px",
      }}
    >
      <Stack direction={"row"} alignItems="center" spacing={3}>
        <Image src={img} alt="" width={50} />
        <Box>
          <Typography
            sx={{
              fontFamily: nunito.style,
              fontWeight: 700,
              fontSize: 24,
              lineHeight: 1.4,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 400 }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default CoachingCard;

import { Box, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import coaching1 from "@/homePage/coaching/coaching1.png";
import { nunito } from "@/utils/fonts";
import { COACHING_CARD_PROPS } from "@/utils/types";
const CoachingCard = ({ img, heading, description }: COACHING_CARD_PROPS) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: ".125rem solid #ffcab5",
        padding: { lg: "24px 16px", xs: "20px" },
        borderRadius: "12px",
      }}
    >
      <Stack direction={"row"} alignItems="center" spacing={{ lg: 3, xs: 2 }}>
        <Image src={img} alt="" width={phone ? 30 : 50} />
        <Box>
          <Typography
            sx={{
              fontFamily: nunito.style,
              fontWeight: 700,
              fontSize: { lg: 24, xs: 18 },
              lineHeight: 1.4,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: 16, xs: 14 },
              fontFamily: nunito.style,
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default CoachingCard;

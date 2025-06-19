import { COLORS } from "@/utils/enum";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import code from "@/homePage/trekship/internship.png";
import { nunito } from "@/utils/fonts";
import { TREKSHIP_CARD_PROPS } from "@/utils/types";
const TrekshipCard = ({ title1, title2, img }: TREKSHIP_CARD_PROPS) => {
  return (
    <Card
      sx={{
        backgroundColor: COLORS.WHITE,
        borderRadius: "20px",
        height: "100%",
        padding: "24px 16px 16px",
        boxShadow:
          "0 0 1px #0000000a,0 2px 2px #00000008,0 4px 3px #00000005,0 8px 3px #00000003,inset -3px -2px 4.9px #868686,inset 3px 2px 5px #929292",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: nunito.style,
            fontWeight: 600,
            lineHeight: 2,
          }}
        >
          {title1}
        </Typography>
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 600 }}
        >
          {title2}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", borderRadius: "20px", mt: 2 }}>
        <Image
          src={img}
          alt=""
          width={330}
          style={{ margin: "auto", borderRadius: "20px" }}
        />
      </Box>
    </Card>
  );
};

export default TrekshipCard;

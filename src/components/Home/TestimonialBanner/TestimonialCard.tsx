import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import quote from "@/icons/testimonial_icon.avif";
import avatar from "@/homePage/testimonial/avatar1.avif";
import { COLORS } from "@/utils/enum";
import { TESTIMONIAL_PROPS } from "@/utils/types";
const TestimonialCard = ({
  testimonial,
  img,
  name,
  progress = 0,
}: TESTIMONIAL_PROPS) => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow:
          "0 8px 17px #0000000a, 0 31px 31px #00000008, 0 70px 42px #00000005, 0 125px 50px #00000003",
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LinearProgress
        value={progress}
        variant="determinate"
        sx={{ color: COLORS.PRIMARY, backgroundColor: COLORS.PRIMARY }}
      />
      <Box sx={{ p: 5 }}>
        <Image src={quote} alt="" width={80} height={60} />
        <Typography
          sx={{ fontFamily: "gomenasans,sans-serif", fontSize: 18, mt: 3 }}
        >
          {testimonial}
        </Typography>
        <Stack direction="row" alignItems={"center"} spacing={2} sx={{ mt: 2 }}>
          <Avatar sx={{ width: 64, height: 64 }}>
            <Image src={img} alt="" width={64} height={64} />
          </Avatar>
          <Typography
            sx={{ fontSize: 18, fontFamily: "gomenasans,sans-serif" }}
          >
            {name}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default TestimonialCard;

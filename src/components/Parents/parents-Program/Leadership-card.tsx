import { Box, SxProps, Theme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import leaderShipBanner from "@/icons/parents-program/leader-ship-banner.avif";
import Image, { StaticImageData } from "next/image";
import leadershipIcon from "@/icons/parents-program/leadership-coaching.avif";
import { nunito } from "@/utils/fonts";
interface LeadershipCard {
  backgroundImage: string;
  icon: StaticImageData;
  heading: string;
  description: string;
  sx?: SxProps<Theme>;
}
const LeaderShipCard = ({
  backgroundImage,
  icon,
  heading,
  description,
  sx,
}: LeadershipCard) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          height: "90vh",
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          border: "1px solid #f3f3f3",
          borderRadius: "20px",
          justifyContent: "center",
          pb: 4,
          ...sx,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Image src={icon} alt="" width={phone ? 100 : 300} />
          <Typography
            sx={{
              mt: 1,
              fontSize: { lg: 32, xs: 25 },
              fontFamily: nunito.style,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.2,
              mb: { lg: 2, xs: 1 },
            }}
          >
            {/* Leadership Coaching */}
            {heading}
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: { lg: 20, xs: 16 },
              fontFamily: nunito.style,

              textAlign: "center",
              lineHeight: 1.4,
              width: 200,
              margin: "auto",
            }}
          >
            {/* 1:1 coaching from leadership coaches */}
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderShipCard;

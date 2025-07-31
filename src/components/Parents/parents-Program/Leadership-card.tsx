import { Box, Typography } from "@mui/material";
import React from "react";
import leaderShipBanner from "@/icons/parents-program/leader-ship-banner.avif";
import Image from "next/image";
import leadershipIcon from "@/icons/parents-program/leadership-coaching.avif";
import { nunito } from "@/utils/fonts";
const LeaderShipCard = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${leaderShipBanner.src})`,
          height: "90vh",
          // width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          border: "1px solid #f3f3f3",
          borderRadius: "20px",
          justifyContent: "center",
          pb: 4,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Image src={leadershipIcon} alt="" width={300} />
          <Typography
            sx={{
              mt: 1,
              fontSize: 32,
              fontFamily: nunito.style,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Leadership Coaching
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: 20,
              fontFamily: nunito.style,

              textAlign: "center",
              lineHeight: 1.4,
              width: 200,
              margin: "auto",
            }}
          >
            1:1 coaching from leadership coaches
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderShipCard;

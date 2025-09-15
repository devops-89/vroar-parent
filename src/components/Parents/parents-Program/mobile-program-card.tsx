import { Box, Grid } from "@mui/material";
import React from "react";
import bgImage from "@/icons/parents-program/leader-ship-banner.avif";
import HeadingField from "@/components/common/Heading-Field";
import internshipIcon from "@/icons/parents-program/leadership-coaching.avif";
import Image from "next/image";
import ParaField from "@/components/common/Para-Field";
import { MOBILE_PROGRAM_CARD } from "@/utils/types";
const MobileProgramCard = ({
  img,
  heading,
  description,
}: MOBILE_PROGRAM_CARD) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition: "50% 100% , 50% 100%",
        backgroundSize: "cover,cover",
        height: "250px",
        paddingTop: "20px",
        paddingLeft: "25px",
        paddingRight: "25px",
        width: "100%",
        borderRadius: 2,
      }}
    >
      <Grid container alignItems={"center"}>
        <Grid size={8}>
          <HeadingField
            label={heading}
            sx={{
              fontSize: 20,
              fontFamily: "gomenasans-bold",
              textAlign: "left",
            }}
          />
        </Grid>
        <Grid size={4}>
          <Image src={img} alt="" width={80} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={12}>
          <ParaField
            label={description}
            sx={{ fontSize: 16, fontWeight: 700 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileProgramCard;

import { Box, Card, Grid } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/banner-image.png";
import parent from "@/banner/parent-web.png";
import Image from "next/image";
import { LayoutProps } from "@/utils/types";
const CustomBanner = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        height: { lg: "125vh", xs: "120vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card sx={{ p: 1 }}>
        <Grid container alignItems={"center"} spacing={3}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={parent}
              alt=""
              // className="img-fluid"
              style={{ borderRadius: 8 }}
              width={450}
              height={500}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>{children}</Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CustomBanner;

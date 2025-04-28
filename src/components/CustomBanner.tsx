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
        // width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card sx={{ p: 2 }}>
        <Grid container alignItems={"center"}>
          <Grid size={6}>
            <Image
              src={parent}
              alt=""
              className="img-fluid"
              style={{ borderRadius: 8 }}
              width={500}
            />
          </Grid>
          <Grid size={6}>{children}</Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CustomBanner;

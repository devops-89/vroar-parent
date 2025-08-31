import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "@/companies/skills.avif";
import img2 from "@/companies/clarity.avif";
import img3 from "@/companies/courage.avif";
import img4 from "@/companies/growth.avif";
import ParaField from "@/components/common/Para-Field";
const FeatureGrid = () => {
  const featureList = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];
  return (
    <Box sx={{ pb: 20 }}>
      <Container>
        <Grid container>
          <Grid size={8} margin={"auto"}>
            <Box>
              <ParaField
                label="Your time gives them"
                sx={{ textAlign: "center", fontSize: 20,textTransform:"uppercase" }}
              />
            </Box>
            <Grid container spacing={4}>
              {featureList.map((val, i) => (
                <Grid
                  size={3}
                  data-aos="fade-left"
                  data-aos-delay={`${i * 200}`}
                >
                  <Image
                    src={val.img}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureGrid;

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bannerImage from "@/icons/parents-program/confidence_banner.avif";
import confidenceIcon from "@/icons/parents-program/confidence_curriculum.avif";
import Image, { StaticImageData } from "next/image";
import { nunito } from "@/utils/fonts";

interface ConfidenceCurriculumProps {
  backgroundImage: string;
  img: StaticImageData;
  heading: string;
  description: string;
}

const ConfidenceCurriculum = ({
  backgroundImage,
  img,
  heading,
  description,
}: ConfidenceCurriculumProps) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "150px",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        border: "1px solid #f3f3f3",
        position: "relative",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={4}>
            <Image
              src={img}
              alt=""
              width={230}
              //   height={230}
              style={{ position: "absolute", top: -80 }}
            />
          </Grid>
          <Grid size={8}>
            <Typography
              sx={{
                mt: 1,
                fontSize: 32,
                fontFamily: nunito.style,
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {/* Confidence Curriculum */}
              {heading}
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontSize: 20,
                fontFamily: nunito.style,

                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {/* A tailored curriculum that builds clarity, confidence, and
              
              critical thinking */}
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConfidenceCurriculum;

import {
  Box,
  Container,
  Grid,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
  sx?: SxProps<Theme>;
}

const ConfidenceCurriculum = ({
  backgroundImage,
  img,
  heading,
  description,
  sx,
}: ConfidenceCurriculumProps) => {
  const phone = useMediaQuery("(max-width:600px)");
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
        ...sx,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={4}>
            <Image
              src={img}
              alt=""
              width={phone ? 100 : 230}
              //   height={230}
              style={{ position: phone ? "initial" : "absolute", top: -80 }}
            />
          </Grid>
          <Grid size={8}>
            <Typography
              sx={{
                mt: 1,
                fontSize: { lg: 32, xs: 24 },
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
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConfidenceCurriculum;

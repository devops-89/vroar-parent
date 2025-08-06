import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import testi_banner from "@/banner/parents/parent_testimonialBanner.avif";
import Badge from "@/components/Home/Components/Badge";
import star from "@/icons/testimonial_star.avif";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
const ParentTestimonial = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${testi_banner.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        borderRadius: "57px",
        position: "relative",
        marginTop: "-360px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "80px",
        zIndex: 1,
        paddingTop: 50,
      }}
    >
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Testimonials" margin="auto" width={150} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
            >
              <HeadingField
                label="What parents"
                color={COLORS.BLACK}
                sx={{ lineHeight: 1.1 }}
              />
              <Image src={star} alt="" width={80} />
              <HeadingField label="like" sx={{ lineHeight: 1.1 }} />
            </Stack>
            <HeadingField
              label="you are saying"
              textAlign="center"
              sx={{ lineHeight: 1.1 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ParentTestimonial;

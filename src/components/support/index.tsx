import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import { COLORS } from "@/utils/enum";
import FaqCard from "../common/Faq-Card";
import {
  SUPPORT_PARENT_FAQ_DATA,
  support_student_faq_data,
} from "@/assets/faqData";

const Supportlayout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <HeadingField
          label="Frequently asked questions"
          sx={{
            fontSize: { lg: 64, xs: 35 },
            fontFamily: "gomenasans-bold",
            textTransform:"capitalize"
          }}
        />
        <Grid container>
          <Grid size={{ lg: 8, xs: 12 }} margin={"auto"}>
            <Divider
              sx={{ mt: 2, borderColor: `${COLORS.PRIMARY} !important` }}
            >
              <ParaField
                label="General Questions"
                sx={{
                  fontSize: { lg: 24, xs: 20 },
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              />
            </Divider>

            <FaqCard data={support_student_faq_data} />
            <Divider
              sx={{ mt: 4, borderColor: `${COLORS.PRIMARY} !important` }}
            >
              <ParaField
                label="PARENTS Questions"
                sx={{
                  fontSize: { lg: 24, xs: 20 },
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              />
            </Divider>
            <Box sx={{ mb: 3 }}>
              <FaqCard data={SUPPORT_PARENT_FAQ_DATA} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Supportlayout;

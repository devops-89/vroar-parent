import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BenefitCard from "./benefit-card";
import { BENEFITS_CARD_DATA } from "@/assets/mentors";

const Benefits = () => {
  return (
    <Box sx={{ backgroundColor: "#fff3f0", py: 10 }}>
      <Container>
        <Grid container>
          <Grid size={8} margin="auto">
            <div data-aos="fade-up">
              <Badge label="BENEFITS" width={100} margin="auto" />
            </div>
            <HeadingField
              label="Big Impact with Zero Headaches."
              sx={{
                fontFamily: "gomenasans-bold",
                lineHeight: "1.1",
                letterSpacing: "-.04em",
              }}
              dataaos="fade-up"
            />
            <ParaField
              label="We make it easy for companies to give back and for parents to trust the process. Our dedicated coordinators and proven framework let you inspire."
              sx={{
                color: "#737373",
                fontSize: 20,
                textAlign: "center",
                mt: 1,
              }}
              dataaos="fade-up"
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container>
          <Grid size={10} margin="auto">
            <Grid container spacing={2}>
              {BENEFITS_CARD_DATA.map((val, i) => (
                <Grid
                  size={6}
                  key={i}
                  sx={{ height: "100%" }}
                  data-aos="fade-left"
                  data-aos-delay={i * 100}
                >
                  <BenefitCard
                    benefits_user={val.benefits_user}
                    list={val.list}
                    isLast={val.isLast}
                    bgColor={val.bgColor}
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

export default Benefits;

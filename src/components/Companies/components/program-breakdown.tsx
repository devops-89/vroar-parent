import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";

const ProgramBreakdown = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={5}>
            <Badge label="Program breakdown" width={200} />
            <HeadingField
              label="Your 3-Week Mentorship"
              textAlign="left"
              sx={{
                fontFamily: "gomenasans-bold",
                letterSpacing: "-.04em",
                lineHeight: 1.1,
              }}
            />
            <ParaField
              label="Our MyTrekShip program is short, structured, and transformational where students get real-world exposure."
              sx={{
                color: "#737373",
                fontSize: 20,
                textAlign: "flex-start",
                mt: 1,
              }}
            />

            <Box
              sx={{
                backgroundColor: "#f8f8f8",
                border: "2px solid #dcdcdc",
                borderRadius: "24px",
                padding: "22px",
                mt: 5,
              }}
            >
              <ParaField
                label="*Our coordinators guide your teen every step of the way with reminders, milestones, and progress updates."
                sx={{ fontSize: 20, lineHeight: 1.4, fontWeight: 700 }}
              />
            </Box>
          </Grid>
          <Grid size={7}>
            <Accordion sx={{ backgroundColor: "#fff2f2" }}>
              <AccordionSummary
                expandIcon={
                  <Box sx={{ backgroundColor: COLORS.WHITE }}>
                    <ArrowDownward />
                  </Box>
                }
              >
                Hello
              </AccordionSummary>
              <AccordionDetails>Heloo</AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramBreakdown;

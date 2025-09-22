import { Accordion_Company } from "@/assets/mentors";
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
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const ProgramBreakdown = () => {
  const [expanded, setExpanded] = useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ lg: 5, xs: 12 }}>
            <Badge label="Program breakdown" width={200} />
            <HeadingField
              label="Your 3-Week Mentorship"
              textAlign="left"
              sx={{
                fontFamily: "gomenasans-bold",
                letterSpacing: "-.04em",
                lineHeight: 1.1,
                fontSize: { lg: 64, xs: 35 },
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
          <Grid size={{ lg: 7, xs: 12 }}>
            {Accordion_Company.map((val, i) => (
              <Accordion
                key={`accordion-${i}`}
                sx={{
                  boxShadow: "none",
                  border: expanded === `panel${i}` ? "1px solid #dcdcdc" : "",
                  borderRadius: "16px",
                  overflow: "hidden",
                  "&:before": { display: "none" },
                  mb: 2,
                }}
                onChange={handleChange(`panel${i}`)}
                expanded={expanded === `panel${i}`}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      sx={{
                        backgroundColor: COLORS.WHITE,
                        borderRadius: "16px",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ArrowDownward
                        sx={{
                          fontSize: { lg: 32, xs: 20 },
                          color: COLORS.PRIMARY,
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    backgroundColor: "#fff2f2",
                    padding: { lg: "30px 24px", xs: "20px 20px" },
                    borderRadius: "10px",
                  }}
                >
                  <Stack
                    direction={{ lg: "row", xs: "column" }}
                    alignItems={{ lg: "center", xs: "flex-start" }}
                    gap={{ lg: 4, xs: 1 }}
                  >
                    <ParaField
                      label={`Week ${i + 1}`}
                      sx={{ fontSize: { lg: 24, xs: 20 }, fontWeight: 700 }}
                    />
                    <Divider orientation="vertical" flexItem />
                    <ParaField
                      label={val.heading}
                      sx={{ fontSize: { lg: 24, xs: 20 }, fontWeight: 700 }}
                    />
                  </Stack>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ backgroundColor: COLORS.WHITE, px: 4, py: 2 }}
                >
                  <Stack
                    direction={{ lg: "row", xs: "column" }}
                    alignItems={{ lg: "center", xs: "flex-start" }}
                    justifyContent={"space-between"}
                  >
                    <ParaField
                      label="Key Actions"
                      sx={{ fontSize: { lg: 24, xs: 20 }, fontWeight: 700 }}
                    />
                    <ParaField
                      label={`Time : ${val.time}`}
                      sx={{ fontSize: { lg: 24, xs: 20 }, fontWeight: 700 }}
                    />
                  </Stack>
                  <List sx={{ mt: { lg: 0, xs: 2 } }}>
                    {val.list.map((item, index) => (
                      <ListItem
                        key={`list-item-${i}-${index}`}
                        disablePadding
                        sx={{ alignItems: { lg: "center" } }}
                      >
                        <ListItemAvatar sx={{ minWidth: 30 }}>
                          <Box
                            sx={{
                              backgroundColor: COLORS.PRIMARY,
                              width: 10,
                              height: 10,
                              borderRadius: 20,
                            }}
                          ></Box>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <ParaField
                              label={item.label}
                              sx={{ fontSize: 24, lineHeight: 1.4 }}
                            />
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramBreakdown;

import { COLORS } from "@/utils/enum";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FaqPlusIcon from "./Faq-plus-icon";
import { Circle } from "@mui/icons-material";
import { nunito } from "@/utils/fonts";
import FaqMinusIcon from "./Faq-minus-icon";

const FaqCard = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const answer1List1 = [
    {
      label:
        "Multiple 1:1 sessions with strengths coaches and career counselors",
    },
    {
      label: "Full access to our online learning platform",
    },
    {
      label: "Mentorship opportunities with vetted professionals",
    },
    {
      label: "Internship placements based on student interests and readiness",
    },
    {
      label:
        "Participation in gamified activities and challenges within the app",
    },
    {
      label: "A robust coin-based rewards system tied to student progress",
    },
  ];

  const answer1List2 = [
    {
      label: "One strengths coaching session",
    },
    {
      label: "One parent-student-counselor workshop",
    },
    {
      label: "Access to online learning modules and webinars",
    },
    {
      label:
        "The option to purchase additional coaching or counseling sessions",
    },
  ];

  const answer4List1 = [
    {
      strong: "Single Session:",
      label: " $150 per 1-hour session",
    },
    {
      strong: "Discounted Bundle:",
      label: " 3 sessions for $360 ($120/session)",
    },
    {
      strong: "4-Session Coaching Bundle (Available in Add-ons):",
      label: " $360 ($90/session)",
    },
  ];
  return (
    <Box sx={{ mt: 3, zIndex: 9999, position: "relative" }}>
      <Accordion
        sx={{
          ":hover": {
            boxShadow: "0 0 14px #fb593380",
          },
          backgroundColor: COLORS.WHITE,
          whiteSpace: "pre-line",
          border: "1px solid #f5f5f4",
          borderRadius: "10px",
          width: "100%",
          padding: "20px",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{}}
          expandIcon={
            expanded === "panel1" ? <FaqMinusIcon /> : <FaqPlusIcon />
          }
        >
          <Typography
            sx={{
              fontSize: 20,
              lineHeight: 1.4,
              fontFamily: "gomenasans,sans-serif",
              fontWeight: 700,
              color: expanded === "panel1" ? COLORS.PRIMARY : COLORS.BLACK,
            }}
          >
            What does a mentor do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: nunito.style, fontSize: 16 }}>
            The Confidence Package is the full experience — designed to guide
            students through a structured journey of self-discovery, career
            exploration, and real-world preparation. It includes:
          </Typography>
          <List>
            {answer1List1.map((val, i) => (
              <ListItem disablePadding>
                <ListItemAvatar sx={{ minWidth: 30 }}>
                  <Circle sx={{ fontSize: 6 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: nunito.style,
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {val.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontFamily: nunito.style, fontSize: 16, mt: 2 }}>
            This package is ideal for 8th to 10th grade students, who are
            beginning to think seriously about their future and want structured
            support to explore paths, prepare for college, and gain real-world
            exposure.
          </Typography>
          <Typography sx={{ fontFamily: nunito.style, fontSize: 16 }}>
            The Explorer Package is a more flexible, à la carte-style option. It
            includes:
          </Typography>
          <List sx={{ mt: 2 }}>
            {answer1List2.map((val, i) => (
              <ListItem disablePadding>
                <ListItemAvatar sx={{ minWidth: 30 }}>
                  <Circle sx={{ fontSize: 6 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "gomenasana,sans-serif",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {val.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontSize: 16, fontFamily: nunito.style, mt: 2 }}>
            The Explorer Package is best for students who are not currently
            seeking mentorship or internship opportunities, but are interested
            in focused coaching and career workshops. It allows families to
            build their own experience without committing to the full Confidence
            track.
          </Typography>
          <Typography sx={{ fontSize: 16, fontFamily: nunito.style, mt: 2 }}>
            Mentorship and internship experiences are only available with the
            Confidence Package, as students are prepared for those opportunities
            through guided coaching and gamified engagement within the app
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          ":hover": {
            boxShadow: "0 0 14px #fb593380",
          },
          backgroundColor: COLORS.WHITE,
          whiteSpace: "pre-line",
          border: "1px solid #f5f5f4",
          borderRadius: "10px",
          width: "100%",
          padding: "20px",
          mt: 2,
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          sx={{}}
          expandIcon={
            expanded === "panel2" ? <FaqMinusIcon /> : <FaqPlusIcon />
          }
        >
          <Typography
            sx={{
              fontSize: 20,
              lineHeight: 1.4,
              fontFamily: "gomenasans,sans-serif",
              fontWeight: 700,
              color: expanded === "panel2" ? COLORS.PRIMARY : COLORS.BLACK,
              pr: 2,
            }}
          >
            Can I upgrade from the Explorer Package to the Confidence Package
            later?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontFamily: nunito.style, fontSize: 16, fontWeight: 800 }}
          >
            Yes!
          </Typography>

          <Typography sx={{ fontFamily: nunito.style, fontSize: 16, mt: 2 }}>
            If you begin with the Explorer Package and later decide to upgrade,
            the full amount you paid for Explorer will be credited toward the
            Confidence Package.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          ":hover": {
            boxShadow: "0 0 14px #fb593380",
          },
          backgroundColor: COLORS.WHITE,
          whiteSpace: "pre-line",
          border: "1px solid #f5f5f4",
          borderRadius: "10px",
          width: "100%",
          padding: "20px",
          mt: 2,
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          sx={{}}
          expandIcon={
            expanded === "panel3" ? <FaqMinusIcon /> : <FaqPlusIcon />
          }
        >
          <Typography
            sx={{
              fontSize: 20,
              lineHeight: 1.4,
              fontFamily: "gomenasans,sans-serif",
              fontWeight: 700,
              color: expanded === "panel3" ? COLORS.PRIMARY : COLORS.BLACK,
              pr: 2,
            }}
          >
            What is the refund or cancellation policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: 16, fontFamily: nunito.style }}>
            You can cancel the Confidence Package anytime.If you’ve paid for the{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 800 }}
            >
              annual or quarterly plan
            </Typography>
            , you’ll receive a refund for{" "}
            <Typography
              component={"span"}
              sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 800 }}
            >
              unused months and services not yet delivered
            </Typography>
            .
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: nunito.style,
              borderLeft: `5px solid ${COLORS.PRIMARY}`,
              px: 3,
              mt: 2,
            }}
          >
            Note: A 3-month commitment is required for the Confidence Package to
            qualify for the money-back guarantee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          ":hover": {
            boxShadow: "0 0 14px #fb593380",
          },
          backgroundColor: COLORS.WHITE,
          whiteSpace: "pre-line",
          border: "1px solid #f5f5f4",
          borderRadius: "10px",
          width: "100%",
          padding: "20px",
          mt: 2,
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          sx={{}}
          expandIcon={
            expanded === "panel4" ? <FaqMinusIcon /> : <FaqPlusIcon />
          }
        >
          <Typography
            sx={{
              fontSize: 20,
              lineHeight: 1.4,
              fontFamily: "gomenasans,sans-serif",
              fontWeight: 700,
              color: expanded === "panel4" ? COLORS.PRIMARY : COLORS.BLACK,
              pr: 2,
            }}
          >
            Can I purchase additional coaching sessions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 600 }}
          >
            Yes.
            <Typography
              sx={{ fontSize: 16, fontFamily: nunito.style }}
              component={"span"}
            >
              You have two options:
            </Typography>
          </Typography>
          <List>
            {answer4List1.map((val, i) => (
              <ListItem disablePadding>
                <ListItemAvatar sx={{ minWidth: 30 }}>
                  <Circle sx={{ fontSize: 6 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: nunito.style,
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: nunito.style,
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                        component={"span"}
                      >
                        {val.strong}
                      </Typography>
                      {val.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontSize: 16, fontFamily: nunito.style, mt: 2 }}>
            These sessions help deepen your student’s strengths exploration and
            career readiness.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqCard;

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
import { HOME_FAQ_DATA } from "@/assets/faqData";

const FaqCard = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box sx={{ mt: 3, zIndex: 999, position: "relative" }}>
      {HOME_FAQ_DATA.map((val, i) => (
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
            zIndex: 99,
            mb: 2,
          }}
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
        >
          <AccordionSummary
            sx={{}}
            expandIcon={
              expanded === `panel${i}` ? <FaqMinusIcon /> : <FaqPlusIcon />
            }
          >
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: 1.4,
                fontFamily: "gomenasans,sans-serif",
                fontWeight: 700,
                color: expanded === `panel${i}` ? COLORS.PRIMARY : COLORS.BLACK,
              }}
            >
              {val.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: nunito.style, fontSize: 16 }}>
              {val.description}
            </Typography>
            <List>
              {val?.list?.map((item, index) => (
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
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ fontFamily: nunito.style, fontSize: 16 }}>
              {val.endDescription}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqCard;

import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import ParaField from "./Para-Field";
import { Add, Circle, Remove } from "@mui/icons-material";
import { SUBSCRIPTION_CARD_PROPS } from "@/utils/types";

interface accordion_props {
  data: SUBSCRIPTION_CARD_PROPS[];
}

const SubscriptionCard = ({ data }: accordion_props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box sx={{ maxHeight: 330, overflowY: "auto" }}>
      {data.map((val, i) => (
        <Accordion
          key={`accordion-${i}`}
          sx={{
            border: `1px solid ${COLORS.PRIMARY}`,
            background: "#FFF6F3",
            "&.MuiPaper-root": {
              borderRadius: "20px",
              mb: 4,
            },
          }}
          onChange={handleChange(`panel${i}`)}
          expanded={expanded === `panel${i}`}
        >
          <AccordionSummary
            sx={{
              fontFamily: nunito.style.fontFamily,
              fontWeight: 700,
              fontSize: 18,
              borderBottom:
                expanded === `panel${i}` ? `1px solid ${COLORS.PRIMARY}` : "",
            }}
            expandIcon={
              expanded === `panel${i}` ? (
                <Remove sx={{ color: COLORS.PRIMARY }} />
              ) : (
                <Add sx={{ color: COLORS.PRIMARY }} />
              )
            }
          >
            {val.feature_heading}
          </AccordionSummary>
          <AccordionDetails>
            <ParaField
              label="Launch your personalized plan for high school — classes, test awareness, volunteering, and passion projects."
              sx={{ fontSize: 16, fontWeight: 550 }}
            />

            <List>
              {val.feature_list.map((item, index) => (
                <ListItem key={`feature-${i}-${index}`}>
                  <ListItemAvatar sx={{ minWidth: 30 }}>
                    <Circle
                      sx={{ width: 8, height: 8, color: COLORS.PRIMARY }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <ParaField
                        sx={{ fontSize: 16, fontWeight: 500 }}
                        label={item.label || ""}
                      />
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SubscriptionCard;

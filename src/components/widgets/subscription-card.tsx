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
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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

  // console.log("teste", data);
  return (
    <Box sx={{ maxHeight: "350px",overflow:"auto" }}>
      {data.map((val, i) => (
        <Accordion
          key={`accordion-${i}`}
          sx={{
            border: `1px solid ${COLORS.PRIMARY}`,
            background: "#FFF6F3",
            "&.MuiPaper-root": {
              borderRadius: "10px",
              mb: 4,
              backgroundColor: COLORS.WHITE,
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
            {/* {val.feature_heading} */}
            {`Year ${i + 1}`}- {val.heading}
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 550,
                fontFamily: nunito.style.fontFamily,
              }}
            >
              {val.feature_purpose}
            </Typography>

            <List>
              {val.feature_list.map((item, index) => (
                <ListItem key={`feature-${i}-${index}`} disablePadding>
                  <ListItemAvatar sx={{ minWidth: 30 }}>
                    <Circle
                      sx={{ width: 8, height: 8, color: COLORS.PRIMARY }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 550,
                          fontFamily: nunito.style.fontFamily,
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography
              sx={{ fontSize: 15, fontFamily: nunito.style.fontFamily }}
            >
              {val.addOnFeature}
            </Typography>
            <Typography
              sx={{ fontSize: 15, fontFamily: nunito.style.fontFamily }}
            >
              {val.summer.heading}
            </Typography>
            {val.summer.content.map((items, index) => (
              <Typography
                sx={{ fontSize: 15, fontFamily: nunito.style.fontFamily }}
              >
                {items.description}
              </Typography>
            ))}
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: nunito.style.fontFamily,
                mt: 2,
                mb: 1,
              }}
            >
              {val.coachingWorkshops.heading}
            </Typography>
            {val.coachingWorkshops.content.map((items, index) => (
              <Typography
                sx={{ fontSize: 15, fontFamily: nunito.style.fontFamily }}
              >
                {items.description}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SubscriptionCard;

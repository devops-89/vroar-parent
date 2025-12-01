import { COLORS } from "@/utils/enum";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List as MuiList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { Circle } from "@mui/icons-material";
import { nunito } from "@/utils/fonts";
import FaqMinusIcon from "@/components/Home/Components/Faq-minus-icon";
import FaqPlusIcon from "@/components/Home/Components/Faq-plus-icon";
import type { List as ListType } from "@/utils/types";
import ParaField from "@/components/common/Para-Field";

interface FAQ_DATA_PROPS {
  data: ListType[];
}

const FaqCard = ({ data }: FAQ_DATA_PROPS) => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box sx={{ mt: 3, zIndex: 999, position: "relative" }}>
      <Stack spacing={2}>
        {data.map((val, i) => (
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
                  fontSize: { lg: 20, xs: 16 },
                  lineHeight: 1.4,
                  fontFamily: "gomenasans,sans-serif",
                  fontWeight: 700,
                  color:
                    expanded === `panel${i}` ? COLORS.PRIMARY : COLORS.BLACK,
                }}
              >
                {val.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ParaField
                label={val.value || ""}
                sx={{ fontSize: { lg: 16, xs: 14 } }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
};

export default FaqCard;

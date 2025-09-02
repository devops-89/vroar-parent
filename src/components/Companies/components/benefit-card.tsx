import GradientText from "@/components/common/Greadient-text";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import starIcon from "@/icons/star_icon.avif";
import Image from "next/image";
import ParaField from "@/components/common/Para-Field";
import { BENEFITS_CARD_PROPS } from "@/utils/types";
const BenefitCard = ({
  benefits_user,
  isLast,
  list,
  bgColor,
}: BENEFITS_CARD_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: bgColor,
          border: "2px solid #fff",
          height: "400px",
          borderRadius: "20px",
          padding: "32px",
          position: "relative",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <HeadingField label="Benefits for" sx={{ fontSize: 26 }} />
          <Box
            sx={{
              backgroundColor: COLORS.WHITE,
              borderRadius: "12px",
              height: "44px",
              paddingTop: "8px",
              paddingRight: "16px",
              paddingLeft: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GradientText
              label={benefits_user}
              sx={{
                textTransform: "uppercase",
                fontSize: 26,
                fontFamily: "gomenasans-bold",
              }}
            />
          </Box>
        </Stack>
        <List>
          {list.map((val, i) => (
            <ListItem key={i} sx={{ alignItems: "flex-start" }}>
              <ListItemAvatar sx={{ minWidth: 32, mt: 1 }}>
                <Image src={starIcon} alt="" width={30} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <ParaField label={val.label || ""} sx={{ fontSize: 24 }} />
                }
              />
            </ListItem>
          ))}
        </List>
        {isLast && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "2.5rem",
              height: "80%",
              position: "absolute",
              inset: "50% auto auto -1.75rem",
              transform: "translateY(-50%)",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((val, i) => (
              <Box
                sx={{
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "32px",
                  height: "12px",
                }}
              ></Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BenefitCard;

import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Plan_Details } from "@/utils/types";
import { ArrowForward, ArrowRight, CheckCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const PlanCard = ({
  plan_type,
  benefits,
  price,
  duration,
  durationType,
  onClick
}: Plan_Details) => {
  return (
    <div>
      <Card sx={{ p: 2, borderRadius: "17.2px" }}>
        <Typography
          sx={{ fontSize: 22, fontFamily: nunito.style, fontWeight: 700 }}
        >
          {plan_type}
        </Typography>
        <Typography
          sx={{ fontSize: 18, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Duration - {duration}
        </Typography>
        <Typography
          sx={{
            fontSize: 38,
            fontFamily: nunito.style,
            color: COLORS.PRIMARY,
            fontWeight: 700,
          }}
        >
          ${price}
          <Typography
            sx={{ fontSize: 16, fontFamily: nunito.style }}
            component={"span"}
          >
            / {durationType}
          </Typography>
        </Typography>
        <Typography
          sx={{ fontSize: 14, fontWeight: 600, fontFamily: nunito.style }}
        >
          What’s included
        </Typography>
        <List>
          {benefits.map((val, i) => (
            <ListItem disablePadding>
              <ListItemAvatar sx={{ minWidth: 35 }}>
                <CheckCircle sx={{ color: COLORS.PRIMARY, fontSize: 20 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: nunito.style,
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
        <Button
          sx={{
            background: COLORS.LINEAR_GRADIENT,
            fontFamily: nunito.style,
            color: COLORS.WHITE,
            borderRadius: 6,
            fontSize: 15,
            ":hover": {
              "& .icon": {
                transform: "rotate(0deg)",
              },
            },
          }}
          fullWidth
          endIcon={
            <Box
              sx={{
                backgroundColor: COLORS.WHITE,
                borderRadius: "50%",
                width: 30,
                height: 30,
              }}
            >
              <ArrowForward
                sx={{
                  fontSize: 20,
                  color: COLORS.PRIMARY,
                  transform: "rotate(-45deg)",
                  transition: "0.5s ease all",
                }}
                className="icon"
              />
            </Box>
          }
          onClick={onClick}
        >
          Subscribe Now
        </Button>
      </Card>
    </div>
  );
};

export default PlanCard;

import { nunito } from "@/utils/fonts";
import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CustomChip from "./CustomChip";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { SUBSCRIPTION_PLAN } from "@/utils/types";

interface DataProps {
  data: SUBSCRIPTION_PLAN;
  chip?: boolean;
  status?: string;
}

const SubscriptionCard = ({ data, chip, status }: DataProps) => {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.1)",
        mt: 2,
        borderRadius: 4,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 550 }}
        >
          {data.heading}
        </Typography>
        {chip && <CustomChip label={status ? status : ""} isDotted={true} />}
      </Stack>
      <Grid container mt={4} spacing={2}>
        {data.plan.map((item, index) => (
          <Grid size={6} key={index}>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: nunito.style,
                color: COLORS.TEXT_COLOR,
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: nunito.style,
                fontWeight: 600,
              }}
            >
              {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default SubscriptionCard;

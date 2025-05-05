import { KIDS_DETAILS, PLAN_DETAILS } from "@/assets/subscriptionData";
import SubscriptionCard from "@/components/SubscriptionCard";
import Wrapper from "@/components/Wrapper";
import { nunito } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";

const Subscriptions = () => {
  return (
    <Wrapper>
      <Box sx={{ p: 4 }}>
        <Typography
          sx={{ fontSize: 30, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Subscriptions
        </Typography>
        <Box>
          <SubscriptionCard data={PLAN_DETAILS} chip={true} />
        </Box>
        <Box>
          <SubscriptionCard data={KIDS_DETAILS} />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Subscriptions;

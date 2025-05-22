import { UserController } from "@/assets/api/UserController";
import CancelSubscriptions from "@/assets/ModalCalling/subscriptions/CancelSubscriptions";
import { KIDS_DETAILS, PLAN_DETAILS } from "@/assets/subscriptionData";
import SubscriptionCard from "@/components/SubscriptionCard";
import Wrapper from "@/components/Wrapper";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { SUBSCRIPTION_PLANS_DETAILS } from "@/utils/types";
import { ContentCopy, Done, Info } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const cancel = () => {
    dispatch(showModal(<CancelSubscriptions />));
  };
  const [copied, setCopied] = useState(false);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const [subscriptionDetails, setSubscriptionDetails] =
    useState<SUBSCRIPTION_PLANS_DETAILS | null>(null);
  const [loading, setLoading] = useState(true);
  const getSubscriptionDetails = () => {
    UserController.getSubscriptionForUser()
      .then((res) => {
        // console.log("www", res);
        const response = res.data.data;
        setSubscriptionDetails(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getSubscriptionDetails();
  }, []);

  // console.log("first", subscriptionDetails);

  const subscriptionPlanDetails = {
    heading: subscriptionDetails?.subscriptionName || "",
    plan: [
      {
        label: "Start Date",
        value:
          subscriptionDetails?.startDate !== undefined
            ? moment.unix(subscriptionDetails.startDate).format("MMM Do, YYYY")
            : "Unknown",
      },
      {
        label: "Expires On",
        value:
          subscriptionDetails?.endDate !== undefined
            ? moment.unix(subscriptionDetails.endDate).format("MMM Do, YYYY")
            : "Unknown",
      },
    ],
  };

  return (
    <Wrapper>
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress sx={{ color: COLORS.PRIMARY }} />
        </Backdrop>
      ) : (
        <Box sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: 30,
              fontFamily: nunito.style,
              fontWeight: 600,
              mb: 6,
            }}
          >
            Subscriptions
          </Typography>
          <Box>
            <SubscriptionCard
              data={subscriptionPlanDetails}
              chip={true}
              status={
                subscriptionDetails?.status === "active"
                  ? USER_STATUS.ACTIVE
                  : ""
              }
            />
          </Box>
          <Box>
            <SubscriptionCard data={KIDS_DETAILS} />
          </Box>
          <Card
            sx={{
              p: 2,
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.1)",
              mt: 2,
              borderRadius: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: nunito.style,
                    fontWeight: 600,
                  }}
                >
                  Subscription ID
                </Typography>
              </Grid>
              <Grid size={6}>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                    }}
                  >
                    {subscriptionDetails?.redeemCode}
                  </Typography>
                  {copied ? (
                    <IconButton>
                      <Done sx={{ fontSize: 14, color: COLORS.PRIMARY }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() =>
                        copyText(subscriptionDetails?.redeemCode ?? "")
                      }
                    >
                      <ContentCopy
                        sx={{ fontSize: 14, color: COLORS.PRIMARY }}
                      />
                    </IconButton>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Card>
          <Box sx={{ mt: 2 }}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Info sx={{ color: "#B4B4B4" }} />
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: nunito.style,
                  fontWeight: 600,
                  color: COLORS.TEXT_COLOR,
                }}
              >
                Enter this Coupon Code in the student app to unlock the full app
                experience for your kid
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Button
              sx={{
                fontSize: 16,
                fontFamily: nunito.style,
                color: "#DE1135",
                border: "1px solid #DE1135",
                borderRadius: 8,
                textTransform: "inherit",
                p: 1,
                width: 180,
              }}
              onClick={cancel}
            >
              Cancel Subscription
            </Button>
          </Box>
        </Box>
      )}
    </Wrapper>
  );
};

export default Subscriptions;

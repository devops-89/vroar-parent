import { UserController } from "@/assets/api/UserController";
import { data } from "@/assets/data";
import { NEW_PLAN_FEATURES } from "@/assets/plans";
// import HeadingField from "@/components/common/Heading-Field";
// import ParaField from "@/components/common/Para-Field";
// import SubscriptionCard from "@/components/common/susbcription-card";
// import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import explorer from "@/icons/Explorer.png";
import { showToast } from "@/redux/reducers/Toast";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { NEW_PLAN_PROPS, PAYMENT_ITEMS } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import SubscriptionCard from "./subscription-card";
const PricingSection = () => {
  const [tabs, setTabs] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState("9");
  const tabsChangeHandler = (e: React.SyntheticEvent, newValue: number) => {
    const label = data.grade[newValue]?.label || data.grade[0].label;
    const gradeNumber = label.match(/\d+/)?.[0] || "9";
    setSelectedGrade(gradeNumber);
    setTabs(newValue);
  };

  const router = useRouter();

  const [subscriptionPlans, setSubscriptionPlans] =
    useState<NEW_PLAN_PROPS[]>();

  const getPlans = () => {
    UserController.getProductList()
      .then((res) => {
        const response = res.data.data;
        const mergedArray = response.map((apiPlan: any) => {
          const staticPlan = NEW_PLAN_FEATURES.find(
            (staticPlan: any) => staticPlan.grade === apiPlan?.metadata?.grade
          );

          return {
            ...apiPlan,
            ...(staticPlan || {}),
          };
        });

        setSubscriptionPlans(mergedArray as NEW_PLAN_PROPS[]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getPlans();
  }, []);

  const selectedPlanFeatures = useMemo(() => {
    const mergedPlan = subscriptionPlans?.find(
      (plan) => plan?.metadata?.grade === selectedGrade
    );
    const fallback = NEW_PLAN_FEATURES.find((p) => p.grade === selectedGrade);
    return mergedPlan?.features || fallback?.features || [];
  }, [subscriptionPlans, selectedGrade]);

  const selectedPlan = useMemo(() => {
    return subscriptionPlans?.find(
      (plan) => plan?.metadata?.grade === selectedGrade
    );
  }, [subscriptionPlans, selectedGrade]);

  const selectedPlanPrice = useMemo(() => {
    if (!selectedPlan) return null;
    const chosenPrice =
      selectedPlan.prices.find((p) => p.isRecurring) || selectedPlan.prices[0];
    if (!chosenPrice) return null;
    // console.log("testprice", chosenPrice);
    const featureCount = selectedPlan.features?.length || 1;
    // console.log("test length", featureCount * chosenPrice.amount);
    return featureCount * chosenPrice.amount;
  }, [selectedPlan]);

  const selectedPlanMonthlyPrice = useMemo(() => {
    if (!selectedPlan) return null;
    const chosenPrice =
      selectedPlan.prices.find((p) => p.isRecurring) || selectedPlan.prices[0];
    if (!chosenPrice) return null;
    // const featureCount = selectedPlan.features?.length || 1;
    return chosenPrice.amount / 12;
  }, [selectedPlan]);

  const selectedPriceId = useMemo(() => {
    if (!selectedPlan) return null;
    const chosenPrice =
      selectedPlan.prices.find((p) => p.isRecurring) || selectedPlan.prices[0];
    return chosenPrice?.id ?? null;
  }, [selectedPlan]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const createPaymentLink = (price_id: string) => {
    setLoading(true);
    if (!selectedPlan?.id) {
      setLoading(false);
      return;
    }
    const items = [{ productId: selectedPlan.id, priceId: price_id }];

    UserController.createPaymentLink({ items } as PAYMENT_ITEMS)
      .then((res) => {
        window.location.href = res.data.data.url;
      })
      .catch((err) => {
        const errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container>
        <Grid
          size={{
            lg: router.pathname === "/parent/subscriptions" ? 8 : 6,
            xs: 12,
          }}
          margin={{ lg: "auto", xs: "initial" }}
        >
          <Tabs
            sx={{
              "& .MuiTabs-list": {
                justifyContent: { lg: "center", xs: "center" },
                gap: { lg: 2, xs: 1 },
                backgroundColor: COLORS.WHITE,
                // width: { lg: 524, xs: "100%" },
                margin: "auto",
                height: 69,
                borderRadius: "60px",
                alignItems: "center",
                overflow: "auto",
                "::-webkit-scrollbar": {
                  width: 0,
                },
                px: 1,
              },
              "& .MuiTab-root": {
                background: COLORS.TRANSPARENT,
                color: COLORS.PRIMARY,
                border: `1px solid ${COLORS.PRIMARY}`,
                borderRadius: 20,
                width: { lg: 113, xs: 60 },
                padding: "16px 2px 16px",
                height: 35,
                fontFamily: nunito.style.fontFamily,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              "& .Mui-selected": {
                background: `${COLORS.LINEAR_GRADIENT} !important`,
                border: "1px solid transparent",
                color: `${COLORS.WHITE} !important`,
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
            value={tabs}
            onChange={tabsChangeHandler}
            variant="scrollable"
            scrollButtons="auto"
          >
            {data.grade.map((val, i) => (
              <Tab label={val.label} key={i} />
            ))}
          </Tabs>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          mt: 10,
          backgroundColor: "#FFF6F3",
          borderRadius: "56px",
          p: 3,
          maxHeight: {
            lg: router.pathname === "/parent/subscriptions" ? "560px" : "450px",
            xs: "100%",
          },

          overflow: "hidden",
        }}
        spacing={4}
        alignItems="flex-start"
      >
        <Grid
          size={{
            lg: router.pathname === "/parent/subscriptions" ? 6 : 5,
            xs: 12,
          }}
        >
          <Card
            sx={{
              p: { lg: 3, xs: 0 },
              boxShadow: "none",
              borderRadius: 4,
              backgroundColor: "transparent",
            }}
          >
            <Stack direction={"row"} alignItems={"flex-start"} spacing={2}>
              <Image src={explorer} alt="" width={30} />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: 25, xs: 16 }, fontWeight: 700 }}
                >
                  {selectedPlanFeatures[0]?.grade_heading || ""} 
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 20, xs: 16 },
                    fontWeight: 700,

                    textAlign: "center",
                  }}
                >
                  {selectedPlanFeatures[0]?.feature_heading || ""} 
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{
                fontSize: { lg: 14, xs: 16 },
                fontFamily: nunito.style.fontFamily,
                mt: 1,
              }}
            >
              {selectedPlanFeatures[0]?.feature_purpose || ""}
            </Typography>

            {selectedPlanMonthlyPrice !== null && (
              <>
                <Typography
                  sx={{
                    fontSize: 40,
                    fontFamily: nunito.style.fontFamily,
                    color: COLORS.PRIMARY,
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  ${selectedPlanMonthlyPrice.toFixed(2)}/mo{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: nunito.style.fontFamily,
                  }}
                >
                  Billed annually
                </Typography>
              </>
            )}

            <List>
              <ListItem sx={{ alignItems: "flex-start" }} disablePadding>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: "#545454",
                        fontFamily: nunito.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { lg: 25, xs: 16 },
                        mt: 2,
                      }}
                    >
                      $
                      {selectedPlanPrice !== null
                        ? selectedPlanPrice.toFixed(2)
                        : ""}{" "}
                      over {selectedPlanFeatures.length * 12} months
                    </Typography>
                  }
                />
              </ListItem>
            </List>

            <Button
              fullWidth
              onClick={() => {
                if (selectedPriceId) createPaymentLink(selectedPriceId);
              }}
              sx={{
                background: COLORS.LINEAR_GRADIENT,
                fontFamily: nunito.style,
                color: COLORS.WHITE,
                borderRadius: 6,
                fontSize: { lg: 15, xs: 12 },
                fontWeight: 600,
                p: 1.5,
                position: "relative",

                ":hover": {
                  "& .icon": {
                    transform: "rotate(0deg)",
                  },
                },
              }}
              endIcon={
                <Box
                  sx={{
                    position: "absolute",
                    left: { lg: "80%", xs: "80%" },
                    top: 5,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: COLORS.WHITE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 2px 2px rgba(255,255,255,0.2)",
                  }}
                >
                  <ArrowForward
                    className="icon"
                    sx={{
                      fontSize: 25,
                      color: COLORS.PRIMARY,
                      transform: "rotate(-45deg)",
                      transition: "0.5s ease all",
                    }}
                  />
                </Box>
              }
            >
              {loading ? (
                <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
              ) : (
                "Get Started Now"
              )}
            </Button>
          </Card>
        </Grid>
        <Grid
          size={{
            lg: router.pathname === "/parent/subscriptions" ? 6 : 7,
            xs: 12,
          }}
        >
          <SubscriptionCard data={selectedPlanFeatures} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingSection;

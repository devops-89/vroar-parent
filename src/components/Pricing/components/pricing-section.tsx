import { UserController } from "@/assets/api/UserController";
import { data } from "@/assets/data";
import { NEW_PLAN_FEATURES } from "@/assets/plans";
import SubscriptionCard from "@/components/common/susbcription-card";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import PlanBadges from "@/components/PlanBadges";
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
                width: { lg: 113, xs: 80 },
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
          mt: { lg: 10, xs: 4 },
          backgroundColor: "#FFF6F3",
          borderRadius: { lg: "56px", xs: "24px" },
          p: { lg: 3, xs: 2 },
          maxHeight: {
            lg: router.pathname === "/parent/subscriptions" ? "560px" : "450px",
            xs: "none",
          },

          overflow: { lg: "auto", xs: "visible" },
        }}
        spacing={{ lg: 4, xs: 2 }}
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
              p: { lg: 3, xs: 2 },
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
                    fontSize: { lg: 40, xs: 32 },
                    fontFamily: nunito.style.fontFamily,
                    color: COLORS.PRIMARY,
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  ${selectedPlanMonthlyPrice.toFixed(2)}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                  <PlanBadges
                    bgColor="#402523"
                    label="PER MONTH"
                    border="1px solid #ffffff"
                    color={COLORS.WHITE}
                  />
                  <PlanBadges
                    bgColor="#4D0058"
                    label="BILLED ANNUALLY"
                    border="1px solid #ffffff"
                    color={COLORS.WHITE}
                  />
                </Stack>
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

            <ButtonWithIcon
              label="get Started Now"
              sx={{ width: "100%", textTransform: "capitalize" }}
            />
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

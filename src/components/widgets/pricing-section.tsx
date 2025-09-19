import { UserController } from "@/assets/api/UserController";
import { data } from "@/assets/data";
import { NEW_PLAN_FEATURES } from "@/assets/plans";
// import HeadingField from "@/components/common/Heading-Field";
// import ParaField from "@/components/common/Para-Field";
// import SubscriptionCard from "@/components/common/susbcription-card";
// import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import explorer from "@/icons/Explorer.png";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { NEW_PLAN_PROPS, PAYMENT_ITEMS } from "@/utils/types";
import { ArrowForward, Circle } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import SubscriptionCard from "./subscription-card";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/reducers/Toast";
const PricingSection = () => {
  const [tabs, setTabs] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState("9");
  const tabsChangeHandler = (e: React.SyntheticEvent, newValue: number) => {
    const label = data.grade[newValue]?.label || data.grade[0].label;
    const gradeNumber = label.match(/\d+/)?.[0] || "9";
    setSelectedGrade(gradeNumber);
    setTabs(newValue);
  };

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
    const featureCount = selectedPlan.features?.length || 1;
    return chosenPrice.amount / featureCount;
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

    console.log("first", items);
    // UserController.createPaymentLink({ items } as PAYMENT_ITEMS)
    //   .then((res) => {
    //     window.location.href = res.data.data.url;
    //   })
    //   .catch((err) => {
    //     const errMessage =
    //       (err.response && err.response.data.message) || err.message;
    //     dispatch(
    //       showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
    //     );
    //   })
    //   .finally(() => setLoading(false));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Tabs
              sx={{
                "& .MuiTabs-list": {
                  justifyContent: "center",
                  gap: 2,
                  backgroundColor: COLORS.WHITE,
                  width: 524,
                  margin: "auto",
                  height: 69,
                  borderRadius: "60px",
                  alignItems: "center",
                },
                "& .MuiTab-root": {
                  background: COLORS.TRANSPARENT,
                  color: COLORS.PRIMARY,
                  border: `1px solid ${COLORS.PRIMARY}`,
                  borderRadius: 20,
                  width: 113,
                  padding: "16px 2px 16px",
                  height: 35,
                  fontFamily: "gomenasans-bold",
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
            maxHeight: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow:"hidden"
          }}
          spacing={4}
          alignItems="center"
        >
          <Grid size={5}>
            <Card
              sx={{
                p: 3,
                boxShadow: "none",
                borderRadius: 4,
                backgroundColor:"transparent"
              }}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Image src={explorer} alt="" width={40} />
                <Typography sx={{ fontSize: 16, fontWeight: 700, mt: 1 }}>
                  {selectedPlanFeatures[0]?.feature_heading || ""}
                </Typography>
              </Stack>
              <Typography
                sx={{ fontSize: 14, fontFamily: nunito.style.fontFamily }}
              >
                {selectedPlanFeatures[0]?.feature_purpose || ""}
              </Typography>
              {selectedPlanPrice !== null && (
                <Typography
                  sx={{
                    fontSize: 40,
                    fontFamily: nunito.style.fontFamily,
                    color: COLORS.PRIMARY,
                    fontWeight: 700,
                  }}
                >
                  ${selectedPlanPrice.toFixed(2)}{" "}
                  {/* <Typography component={"span"} sx={{ fontSize: 18 }}>
                    for {selectedPlanFeatures.length} years
                  </Typography> */}
                </Typography>
              )}
              <Stack direction="row" alignItems={"center"} spacing={2}>
                <Box
                  sx={{
                    backgroundColor: "#402523",
                    color: COLORS.WHITE,
                    borderRadius: "8px",
                    border: "1px solid #ffffff",
                    width: 110,
                    height: 34,
                    padding: "7.5px 12px  ",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: nunito.style.fontFamily,
                    fontSize: 14,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    // lineHeight: "21px",
                  }}
                >
                  Per Month
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#4D0058",
                    color: COLORS.WHITE,
                    borderRadius: "8px",
                    border: "1px solid #ffffff",
                    width: 200,
                    height: 34,
                    padding: "7.5px 12px  ",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: nunito.style.fontFamily,
                    fontSize: 14,
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Billed Annually
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    color: "#545454",
                    width: 10,
                    height: 10,
                    borderRadius: 20,
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "#545454",
                    fontFamily: nunito.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 25,
                  }}
                >
                  $
                  {selectedPlanPrice !== null
                    ? (selectedPlanPrice * selectedPlanFeatures.length).toFixed(
                        2
                      )
                    : ""}{" "}
                  over {selectedPlanFeatures.length * 12} months
                </Typography>
              </Stack>

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
                  fontSize: 15,
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
          <Grid size={7}>
            <SubscriptionCard data={selectedPlanFeatures} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;

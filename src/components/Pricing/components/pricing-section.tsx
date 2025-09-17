import { UserController } from "@/assets/api/UserController";
import { data } from "@/assets/data";
import { NEW_PLAN_FEATURES } from "@/assets/plans";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import SubscriptionCard from "@/components/common/susbcription-card";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import explorer from "@/icons/Explorer.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { NEW_PLAN_PROPS } from "@/utils/types";
import { Circle } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
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
    UserController.getPlansPublic()
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

        console.log("werw", mergedArray);

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

  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={8} margin={"auto"}>
            <Tabs
              sx={{
                "& .MuiTabs-list": {
                  justifyContent: "center",
                  gap: 2,
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
        <Grid container sx={{ mt: 10 }} spacing={4}>
          <Grid size={4}>
            <Card
              sx={{
                backgroundColor: "#FFF6F3",
                p: 3,
                boxShadow: "0px 0px 2px 2px #eeeeee",
                borderRadius: 4,
              }}
            >
              <Image src={explorer} alt="" width={40} />
              <ParaField
                label={selectedPlanFeatures[0]?.feature_heading || ""}
                sx={{ fontSize: 20, fontWeight: 700, mt: 1 }}
              />
              <ParaField
                label={selectedPlanFeatures[0]?.feature_purpose || ""}
                sx={{ fontSize: 16, mt: 1 }}
              />
              <ButtonWithIcon
                label="Explore Now"
                sx={{ width: "100%", mt: 2 }}
              />
            </Card>
          </Grid>
          <Grid size={8}>
            <SubscriptionCard data={selectedPlanFeatures} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;

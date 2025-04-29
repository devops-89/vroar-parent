import Wrapper from "@/components/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import subscriptionBanner from "@/banner/subscription-banner.png";
import Sidebar from "@/components/Profile/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import PlanCard from "@/components/PlanCard";
import { plans_data } from "@/assets/plans";
import { addActiveStep } from "@/redux/reducers/Stepper";
import { useRouter } from "next/router";
const Plans = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubscribePlan = () => {
    dispatch(addActiveStep());
    router.push("/invite");
  };
  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {activeStep === 1 && (
          <Box
            sx={{
              p: 2,
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${subscriptionBanner.src})`,
                height: "90vh",
                width: "100%",
                borderRadius: 2,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(#21164D,#ffffff30)",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 40,
                    fontFamily: nunito.style,
                    fontWeight: 700,
                    color: COLORS.WHITE,
                  }}
                >
                  Your Child's Path to Career Success!
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: nunito.style,
                    fontWeight: 600,
                    color: COLORS.WHITE,
                    width: 560,
                  }}
                >
                  Personalized roadmaps, expert mentorship, and gamified
                  learning—tailored for your child’s growth and future. Empower
                  them to take the first step toward their dreams
                </Typography>
                <Grid container sx={{ mt: 3 }} spacing={4}>
                  {plans_data.map((val, i) => (
                    <Grid size={4}>
                      <PlanCard
                        plan_type={val.plan_type}
                        duration={val.duration}
                        price={val.price}
                        benefits={val.benefits}
                        durationType={val.durationType}
                        onClick={handleSubscribePlan}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Wrapper>
  );
};

export default Plans;

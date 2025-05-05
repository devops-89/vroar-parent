import { plans_data } from "@/assets/plans";
import subscriptionBanner from "@/banner/subscription-banner.png";
import PlanCard from "@/components/PlanCard";
import Sidebar from "@/components/Profile/Sidebar";
import { addActiveStep, setActiveStep } from "@/redux/reducers/Stepper";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Plans = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubscribePlan = () => {
    dispatch(addActiveStep({ path: "/invite" }));
    router.push("/invite");
  };

  useEffect(() => {
    if (router.pathname === "/plans") {
      dispatch(setActiveStep(1));
    }
  }, [router.pathname]);
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundImage: `url(${background.src})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {/* <Card sx={{  minWidth: "100%" }}> */}
      <Grid container>
        <Grid size={3}>
          <Sidebar />
        </Grid>
        <Grid size={9}>
          {activeStep === 1 && (
            <Box
              sx={{
                p: 2,
                height: "100vh",

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
                {/* <Box> */}
                <Box
                  sx={{
                    p: 2,
                    background: "linear-gradient(#21164D,#ffffff30)",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box>
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
                      learning—tailored for your child’s growth and future.
                      Empower them to take the first step toward their dreams
                    </Typography>
                    <Grid container sx={{ mt: 3 }} spacing={4}>
                      {plans_data.map((val, i) => (
                        <Grid size={4} key={i}>
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
            </Box>
          )}
        </Grid>
      </Grid>
      {/* </Card> */}
    </Box>
  );
};

export default Plans;

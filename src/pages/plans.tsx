import { UserController } from "@/assets/api/UserController";
import { plans_data } from "@/assets/plans";
import subscriptionBanner from "@/banner/subscription-banner.png";
import PlanCard from "@/components/PlanCard";
import Sidebar from "@/components/Profile/Sidebar";
import { addActiveStep, setActiveStep } from "@/redux/reducers/Stepper";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { STATIC_SUBSCRIPTION_PLANS, SUBSCRIPTION_PLANS } from "@/utils/types";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Plans = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubscribePlan = () => {
    dispatch(addActiveStep({ path: "/invite" }));
    router.push("/invite");
  };
  const [subscriptionPlans, setSubscriptonPlans] =
    useState<SUBSCRIPTION_PLANS[]>();
  const [loading, setLoading] = useState(true);
  const getSubscriptionList = () => {
    UserController.getProductList()
      .then((res) => {
        const response = res.data.data;
        console.log("Backend plans:", response);
        console.log("Static plans:", plans_data);
        
        // First, merge static data with matching backend plans
        const mergedArray = response.map((apiPlan: any) => {
          const staticPlan = plans_data.find(
            (staticPlan: any) => staticPlan.id === apiPlan.id
          );
          console.log("Matching static plan for", apiPlan.id, ":", staticPlan);

          return {
            ...apiPlan,
            ...(staticPlan || {}),
          };
        });

        console.log("Final merged plans:", mergedArray);
        setSubscriptonPlans(mergedArray as SUBSCRIPTION_PLANS[]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(true);
      });
  };

  useEffect(() => {
    getSubscriptionList();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container>
        {/* <Grid size={{ lg: 3, xs: 12 }}>
          <Sidebar />
        </Grid> */}
        <Grid size={{ lg: 12, xs: 12 }}>
          {activeStep === 1 && (
            <Box
              sx={{
                p: 2,
                minHeight: "100vh",

                width: "100%",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${subscriptionBanner.src})`,
                  minHeight: "90vh",
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

                    width: "100%",
                    mt: { lg: 0, xs: 7 },
                    borderRadius: 2,
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
                        width: { lg: 560, xs: 350 },
                      }}
                    >
                      Personalized roadmaps, expert mentorship, and gamified
                      learning—tailored for your child's growth and future.
                      Empower them to take the first step toward their dreams
                    </Typography>
                    {loading ? (
                      <Backdrop open={loading}>
                        <CircularProgress sx={{ color: COLORS.PRIMARY }} />
                      </Backdrop>
                    ) : (
                      <Grid container>
                        <Grid size={{ lg: 10, xs: 12 }} margin={"auto"}>
                          <Grid container sx={{ mt: 3 }} spacing={4}>
                            {subscriptionPlans?.map((val, i) => (
                              <Grid size={{ lg: 6, xs: 12 }} key={i}>
                                <PlanCard
                                  description={val.description}
                                  id={val.id}
                                  name={val.name}
                                  prices={val.prices}
                                  img={val.img}
                                  benefits={val.benefits}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
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

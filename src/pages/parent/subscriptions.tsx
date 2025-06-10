import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { UserController } from "@/assets/api/UserController";
import ChildInvite from "@/assets/ModalCalling/ChildInvite";
import CancelSubscriptions from "@/assets/ModalCalling/subscriptions/CancelSubscriptions";
import { plans_data } from "@/assets/plans";
import { KIDS_DETAILS, PLAN_DETAILS } from "@/assets/subscriptionData";
import PlanCard from "@/components/PlanCard";
import InviteDetails from "@/components/Profile/InviteDetails";
import SubscriptionCard from "@/components/SubscriptionCard";
import Wrapper from "@/components/Wrapper";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  INVITEE_DETAILS,
  SUBSCRIPTION_PLAN,
  SUBSCRIPTION_PLANS,
  SUBSCRIPTION_PLANS_DETAILS,
} from "@/utils/types";
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
import { useDispatch, useSelector } from "react-redux";
import subscriptionBanner from "@/banner/subscription-banner.png";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const cancel = () => {
    dispatch(showModal(<CancelSubscriptions />));
  };

  const inviteUser = () => {
    dispatch(showModal(<ChildInvite getInviteeDetails={getInviteeDetails} />));
  };

  const user = useSelector((state: any) => state.user);

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
  const [productData, setProductData] = useState<SUBSCRIPTION_PLANS[] | []>([]);
  const getSubscriptionDetails = () => {
    UserController.getSubscriptionForUser()
      .then((res) => {
        // console.log("www", res);
        const response = res.data.data;
        if (response) {
          setSubscriptionDetails(response);
          getInviteeDetails();
        } else {
          getPlans();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [inviteeData, setInviteeData] = useState<INVITEE_DETAILS[]>([]);
  const getInviteeDetails = () => {
    AuthenticationController.getInviteesDetail()
      .then((res) => {
        // console.log("erer", res);
        const response = res.data.data;
        setInviteeData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const getPlans = () => {
    UserController.getProductList()
      .then((res) => {
        const response = res.data.data;
        // console.log("resonse", response);
        const mergedArray = plans_data.map((staticPlan: any) => {
          const matchedPlan = response.find(
            (apiPlan: any) => apiPlan.id === staticPlan.id
          );

          return {
            ...staticPlan,
            ...(matchedPlan || {}),
          };
        });

        // console.log("Merged Array", mergedArray);
        setProductData(mergedArray as SUBSCRIPTION_PLANS[]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(true);
      });
  };

  useEffect(() => {
    getSubscriptionDetails();
  }, []);

  // console.log("first", inviteeData);

  const subscriptionPlanDetails = {
    heading: subscriptionDetails?.subscriptionName || "",
    plan: [
      {
        label: "Start Date",
        value: subscriptionDetails?.startDate
          ? moment.unix(subscriptionDetails.startDate).format("MMM Do, YYYY")
          : "--",
      },
      {
        label: "Expires On",
        value: subscriptionDetails?.endDate
          ? moment.unix(subscriptionDetails.endDate).format("MMM Do, YYYY")
          : "--",
      },
    ],
  };

  const newData = [
    {
      heading: "Full Name",
      value: user?.kids?.length
        ? `${user.kids[0].firstName} ${user.kids[0].lastName}`
        : `${inviteeData[0]?.firstName} ${inviteeData[0]?.lastName}`,
    },
    {
      heading: "Grade",
      value: user.kids?.length
        ? user?.kids[0].grade
        : `${inviteeData[0]?.grade} `,
    },
    {
      heading: "Email Address",
      value: user.kids?.length
        ? user?.kids[0].email
        : `${inviteeData[0]?.email} `,
    },
    {
      heading: "Phone Number",
      value: user.kids?.length
        ? `${user.kids[0]?.countryCode} ${user.kids[0]?.phoneNo} `
        : `+${inviteeData[0]?.countryCode} ${inviteeData[0]?.phoneNo} `,
    },
  ];

  return (
    <Wrapper>
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress sx={{ color: COLORS.PRIMARY }} />
        </Backdrop>
      ) : (
        <Box sx={{ p: subscriptionDetails ? 4 : 0 }}>
          <Typography
            sx={{
              fontSize: 30,
              fontFamily: nunito.style,
              fontWeight: 600,
              mb: 6,
              p: subscriptionDetails ? 0 : 3,
              textAlign: { xs: "center", lg: "start" },
            }}
          >
            Subscriptions
          </Typography>
          {subscriptionDetails ? (
            <>
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
                <Card
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.1)",
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: nunito.style,
                      fontWeight: 550,
                    }}
                  >
                    Kids Details
                  </Typography>
                  {inviteeData?.length ? (
                    <Grid container sx={{ mt: 2 }} spacing={3}>
                      {newData.map((val, i) => (
                        <Grid size={{ lg: 6, xs: 12 }} key={i}>
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontFamily: nunito.style,
                              color: COLORS.TEXT_COLOR,
                            }}
                          >
                            {val.heading}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontFamily: nunito.style,
                              fontWeight: 600,
                            }}
                          >
                            {val.value}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Box sx={{ textAlign: "start", mt: 2 }}>
                      <Button
                        sx={{
                          background: COLORS.LINEAR_GRADIENT,
                          color: COLORS.WHITE,
                          fontSize: 16,
                          fontFamily: nunito.style,
                          fontWeight: 600,
                          borderRadius: 20,
                          textTransform: "initial",
                          width: 150,
                        }}
                        onClick={inviteUser}
                      >
                        Invite Your Child
                      </Button>
                    </Box>
                  )}
                </Card>
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
                  <Grid size={{ lg: 6, xs: 12 }}>
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
                  <Grid size={{ lg: 6, xs: 12 }}>
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
                            copyText(subscriptionDetails?.redeemCode || "")
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
                    Enter this Coupon Code in the student app to unlock the full
                    app experience for your kid
                  </Typography>
                </Stack>
              </Box>
            </>
          ) : (
            <>
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
                      borderRadius: 2,
                      width: "100%",
                      mt: { lg: 0, xs: 0 },
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
                        learning—tailored for your child’s growth and future.
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
                              {productData?.map((val, i) => (
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
            </>
          )}
        </Box>
      )}
    </Wrapper>
  );
};

export default Subscriptions;

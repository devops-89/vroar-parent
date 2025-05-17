import Sidebar from "@/components/Profile/Sidebar";
import { addActiveStep } from "@/redux/reducers/Stepper";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { ContentCopy, Done } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(addActiveStep({ path: "/invite" }));
      router.push("/invite");
    }, 2000);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container>
        <Grid size={3}>
          <Sidebar />
        </Grid>
        <Grid size={9}>
          <Box sx={{ p: 4 }}>
            <Typography
              sx={{ fontSize: 30, fontFamily: nunito.style, fontWeight: 600 }}
            >
              Subscriptions
            </Typography>

            <Box
              sx={{
                textAlign: "center",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 10,
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(245, 190, 177, 0.08)",
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(237, 143, 120, 0.12)",
                      width: 105,
                      height: 105,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "rgba(255, 171, 151, 0.16)",
                        width: 89,
                        height: 89,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto",
                        borderRadius: "50%",
                      }}
                    >
                      <Box
                        sx={{
                          background: COLORS.LINEAR_GRADIENT,
                          width: 89,
                          height: 89,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "auto",
                          borderRadius: "50%",
                        }}
                      >
                        <Done sx={{ color: COLORS.WHITE, fontSize: 50 }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: 40,
                    fontFamily: nunito.style,
                    fontWeight: 800,
                  }}
                >
                  Subscription Successful!
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: nunito.style,
                    fontWeight: 500,
                    width: 700,
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  We're excited for you and your child to begin this journey!
                  Get ready to explore, grow, and unlock new possibilities
                  together.
                </Typography>

                <Box
                  sx={{
                    margin: "auto",
                    border: `1px dashed ${COLORS.PRIMARY}`,
                    width: 250,
                    textAlign: "center",
                    borderRadius: 4,
                    mt: 2,
                    backgroundColor: "#FFF6F3",
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    justifyContent={"center"}
                    sx={{ p: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: 30,
                        fontWeight: 700,
                        fontFamily: nunito.style,
                      }}
                    >
                      ZP110USE
                    </Typography>
                    <IconButton sx={{ fontSize: 20, color: COLORS.PRIMARY }}>
                      <ContentCopy />
                    </IconButton>
                  </Stack>
                </Box>
                <Box sx={{ width: 700, textAlign: "center", mt: 3 }}>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: nunito.style,
                    }}
                  >
                    Enter the code in the app to unlock exclusive resources. And{" "}
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        fontFamily: nunito.style,
                        color: COLORS.PRIMARY,
                      }}
                      component={"span"}
                    >
                      Parent version is launching soon
                    </Typography>{" "}
                    . So you'll be able to support their journey firsthand!{" "}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: nunito.style,
                    color: "#262626",
                    fontWeight: 600,
                    mt: 5,
                  }}
                >
                  *Check your inbox, we’ve emailed instructions to use the code!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentSuccess;

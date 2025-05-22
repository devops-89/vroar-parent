import { AuthenticationController } from "@/assets/api/AuthenticationController";
import {
  loadGoogleOAuthScript,
  loadGoogleScript,
} from "@/assets/apiCalling/user";
import { data } from "@/assets/data";
import bannerImage from "@/banner/banner-image.png";
import parentBanner from "@/banner/parent-web.png";
import { removeActiveStep } from "@/redux/reducers/Stepper";
import { showToast } from "@/redux/reducers/Toast";
import { COLORS, SOCIAL_LOGIN, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { GoogleCredentialResponse, GoogleNotification } from "@/utils/types";
import { signUpValidationSchema } from "@/utils/validationSchema";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

declare global {
  interface Window {
    google: any;
  }
}
const Banner = () => {
  // console.log("client id", clientId);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleSubmit(values);
    },
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (body: { email: string }) => {
    AuthenticationController.emailExists(body)
      .then((res) => {
        router.push(`/create-profile?email=${body.email}`);
        dispatch(removeActiveStep());

        setLoading(false);
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
        setLoading(false);
      });
  };

  // social Logins
  const [socialLoading, setSocialLoading] = useState(false);
  const socialLoginHandler = (type: string) => {
    setSocialLoading(true);
    if (type === SOCIAL_LOGIN.GOOGLE) {
      handleLoginClick();
    }
  };

  const [googleReady, setGoogleReady] = useState(false);

  useEffect(() => {
    loadGoogleScript().then(() => {
      setGoogleReady(true);

      if (window.google) {
        window.google.accounts.id.initialize({
          client_id:
            "814443057039-h55fl7pjfabl3b8rgo1fhg7s4jlofale.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });
      }
    });
  }, []);

  const handleCredentialResponse = (response: GoogleCredentialResponse) => {
    const user = jwtDecode(response.credential);
    // console.log("sadf", response.credential);
    // console.log("User Info:", user);
    setLoading(false);
    // Send token/user info to backend if needed
    AuthenticationController.googleLogin(response?.credential)
      .then((res) => {
        console.log("respone", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleLoginClick = () => {
    if (window.google && window.google.accounts) {
      // window.google.accounts.id.prompt(); // triggers the sign-in prompt
      // window.google.accounts.id.prompt((notification: any) => {
      //   if (notification.isNotDisplayed()) {
      //     console.log(
      //       "Sign-in prompt not displayed:",
      //       notification.getNotDisplayedReason()
      //     );
      //   }
      //   if (notification.isSkippedMoment()) {
      //     console.log(
      //       "Sign-in prompt skipped:",
      //       notification.getSkippedReason()
      //     );
      //   }
      // });
      // window.google.accounts.id.prompt();
      // window.google.accounts.id.renderButton(
      //   document.getElementById("googleDiv"),
      //   {
      //     theme: "outline",
      //     size: "large",
      //   }
      // );
      const params = new URLSearchParams({
        client_id:
          clientId ||
          "814443057039-h55fl7pjfabl3b8rgo1fhg7s4jlofale.apps.googleusercontent.com",
        redirect_uri: "https://vroar-188a2.firebaseapp.com/__/auth/handler",
        response_type: "token",
        scope: "openid email profile",
      });

      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    } else {
      console.error("Google Identity Services SDK not loaded yet");
    }
  };

  // useEffect(() => {
  //   loadGoogleOAuthScript();
  // }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        height: { lg: "100vh", xs: "100%" },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {socialLoading ? (
        <Backdrop open={socialLoading}>
          <CircularProgress sx={{ color: COLORS.PRIMARY }} />
        </Backdrop>
      ) : (
        <Container>
          <Grid container>
            <Grid size={8} margin={"auto"}>
              <Card sx={{ p: 2 }}>
                <Grid container>
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <Image
                      src={parentBanner}
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: 4 }}
                    />
                  </Grid>

                  <Grid
                    size={{ lg: 6, xs: 12 }}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <form onSubmit={formik.handleSubmit}>
                      <Box sx={{ p: 4 }}>
                        <Typography
                          sx={{
                            fontSize: 28,
                            fontWeight: 770,
                            textAlign: "center",
                            fontFamily: nunito.style,
                          }}
                        >
                          Welcome
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 28,
                            fontWeight: 770,
                            textAlign: "center",
                            fontFamily: nunito.style,
                            color: COLORS.PRIMARY,
                          }}
                        >
                          Parents/Guardians!
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            textAlign: "center",
                            fontFamily: nunito.style,
                            color: COLORS.TEXT_COLOR,
                          }}
                        >
                          Sign up to stay connected and support your child's
                          success
                        </Typography>
                        <TextField
                          sx={{ ...loginTextField, mt: 2 }}
                          fullWidth
                          label="Email Id"
                          id="email"
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                        <Button
                          sx={{
                            background: COLORS.LINEAR_GRADIENT,
                            borderRadius: 5,
                            color: COLORS.WHITE,
                            textTransform: "initial",
                            fontFamily: nunito.style,
                            mt: 2,
                          }}
                          fullWidth
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <CircularProgress
                              size={20}
                              sx={{ color: COLORS.BLACK }}
                            />
                          ) : (
                            "Sign Up"
                          )}
                        </Button>
                        <Divider sx={{ mt: 2 }}>
                          <Typography
                            sx={{
                              fontSize: 11,
                              fontFamily: nunito.style,
                              color: COLORS.TEXT_COLOR,
                            }}
                          >
                            Or continue with
                          </Typography>
                        </Divider>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={2}
                          mt={2}
                        >
                          {data.socialIcons.map((val, i) => (
                            <IconButton
                              sx={{
                                backgroundColor: "#EEEFF3",
                                borderRadius: 2,
                              }}
                              onClick={() => socialLoginHandler(val.label)}
                            >
                              <Image src={val.img} alt="" width={15} />
                            </IconButton>
                          ))}
                        </Stack>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontFamily: nunito.style,
                            textAlign: "center",
                            mt: 2,
                          }}
                        >
                          Already have an account?{" "}
                          <Typography
                            component={"span"}
                            sx={{
                              fontSize: 14,
                              fontFamily: nunito.style,
                              color: COLORS.PRIMARY,
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            onClick={() => router.push("/login")}
                          >
                            Sign In
                          </Typography>
                        </Typography>
                      </Box>
                    </form>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Banner;
